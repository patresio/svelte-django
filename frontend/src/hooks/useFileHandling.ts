import { writable } from 'svelte/store';

export function useFileHandling() {
    const imageFile = writable<File | null>(null);
    const imagePreviewUrl = writable<string | null>(null);

    function handleFileChange(e: Event) {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            const file = target.files[0];
            imageFile.set(file);
            imagePreviewUrl.set(URL.createObjectURL(file));
        } else {
            imageFile.set(null);
            imagePreviewUrl.set(null);
        }
    }

    return {
        imageFile,
        imagePreviewUrl,
        handleFileChange
    };
}
