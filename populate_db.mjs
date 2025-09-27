import fs from 'fs/promises';
import fetch from 'node-fetch';
import FormData from 'form-data';

async function main() {
    try {
        const filePath = 'frontend/src/data/filmsFake.ts';
        const fileContent = await fs.readFile(filePath, 'utf-8');

        let tempFileContent = fileContent
            .replace("import type { Films } from '../models/Film';", "")
            .replace("import { writable } from 'svelte/store';", "")
            .replace("const films = writable<Films>([", "export const films = [")
            .replace("]);", "];")
            .replace("export default films;", "");

        const tempFilePath = './temp_films.mjs';
        await fs.writeFile(tempFilePath, tempFileContent);
        
        const { films } = await import(tempFilePath);

        for (const film of films) {
            const formData = new FormData();
            
            // Append all fields except id and image
            for (const key in film) {
                if (key !== 'id' && key !== 'image') {
                    formData.append(key, film[key]);
                }
            }

            const response = await fetch('http://localhost:8000/api/v1/films/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log(`Successfully added film: ${film.title}`);
            } else {
                const errorData = await response.json();
                console.error(`Failed to add film: ${film.title}`, errorData);
            }
        }

        await fs.unlink(tempFilePath);

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
