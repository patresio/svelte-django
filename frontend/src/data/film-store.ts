import type { Films } from '../models/Film';
import { writable } from 'svelte/store';

const films = writable<Films>([
	{
		id: 1,
		title: 'A Origem',
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/3f122417c55feda5c465f701320892661bfea27c1dfcff81e7fb0641ba29171c.jpg',
		director: 'Christopher Nolan',
		sinopse: 'Um ladrão invade os sonhos das pessoas para roubar segredos.',
		description:
			'Dom Cobb é um especialista em extrair informações do subconsciente durante os sonhos. Ele recebe a missão quase impossível de implantar uma ideia na mente de alguém, em vez de apenas roubá-la.',
		duration: '148 min',
		rating: 8.8
	},
	{
		id: 2,
		title: 'Clube da Luta',
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19vjPbHR8V7gPw_hYQE6W6MkjxUm0IO7Mxg6HKc4SgI-nkHAtLTy_q38MjCGGnn3Oc-FEsDvwm9EDBnOCLcmPHnFqjgDQaMHhMdhNYYXTS6y-HmrAPn4EzyJG1ebQ8tPM4LHQ2eoR56U/s1000/clube+da+luta.png',
		director: 'David Fincher',
		sinopse: 'Um homem comum cria um clube secreto de luta.',
		description:
			'Um funcionário entediado e um vendedor de sabonetes formam um clube secreto que evolui para algo muito maior e perigoso do que eles imaginavam.',
		duration: '139 min',
		rating: 8.8
	},
	{
		id: 3,
		title: 'O Senhor dos Anéis: A Sociedade do Anel',
		image:
			'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaPCsleGqpks2JZZmtIzrHhLHpKerU5ALJnEVzB-VWvKxHFbQ7-AF2_KbZm-ZAHU127UFgJu7SwFIz29L8xzRn-u7II3e-c1le5U.jpg?r=5ca',
		director: 'Peter Jackson',
		sinopse: 'Um grupo deve destruir um anel maligno.',
		description:
			'Frodo e seus amigos embarcam em uma jornada para destruir o Um Anel e derrotar o Senhor do Escuro, Sauron.',
		duration: '178 min',
		rating: 8.8
	},
	{
		id: 4,
		title: 'Matrix',
		image:
			'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZzDupwylH-h0zoEyASxaxb-eXBvlskslcNE-zYTrF4-vtehLHmkb13FL95R8M9mjji5whxBux6iS-fKTRiHju_wAuMgRi7Dwybo.jpg?r=608',
		director: 'Lana e Lilly Wachowski',
		sinopse: 'Um hacker descobre a verdade sobre sua realidade.',
		description:
			'Neo descobre que o mundo em que vive é uma simulação criada por máquinas, e junta-se a rebeldes para libertar a humanidade.',
		duration: '136 min',
		rating: 8.7
	},
	{
		id: 5,
		title: 'Forrest Gump',
		image:
			'https://resizing.flixster.com/kNAalgVTTW4PiJNLyUlQrRoXbTA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_h9_aa.jpg',
		director: 'Robert Zemeckis',
		sinopse: 'A vida extraordinária de um homem simples.',
		description:
			'Forrest Gump, um homem com QI baixo, testemunha e influencia eventos históricos dos EUA enquanto busca o amor de sua vida, Jenny.',
		duration: '142 min',
		rating: 8.8
	},
	{
		id: 6,
		title: 'Os Suspeitos',
		image: 'https://folhacg.com.br/wp-content/uploads/2023/06/Os-Suspeitos-Principal.jpg',
		director: 'Bryan Singer',
		sinopse: 'Um grupo de criminosos é reunido em uma investigação.',
		description:
			'Após um golpe, cinco criminosos são reunidos em uma investigação que leva a um enigma maior envolvendo o misterioso Keyser Söze.',
		duration: '106 min',
		rating: 8.5
	},
	{
		id: 7,
		title: 'O Silêncio dos Inocentes',
		image:
			'https://s2-gshow.glbimg.com/mWPyJ-X2QCCxuNmKknjcmUEO_WI=/0x0:1050x656/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/I/v/F4ePAOTIOgCtdBscHOsQ/meia-entrada-cast-10-05-2018.jpg',
		director: 'Jonathan Demme',
		sinopse: 'Uma agente busca ajuda de um assassino preso.',
		description:
			'Clarice Starling, uma jovem agente do FBI, procura a ajuda do brilhante mas perigoso Hannibal Lecter para capturar um serial killer.',
		duration: '118 min',
		rating: 8.6
	},
	{
		id: 8,
		title: 'Gladiador',
		image: 'https://aventurasnahistoria.com.br/wp-content/uploads/2024/11/gladiador-16.jpg',
		director: 'Ridley Scott',
		sinopse: 'Um general romano busca vingança.',
		description:
			'Após ser traído e ver sua família assassinada, o general Maximus se torna gladiador e luta por vingança contra o imperador corrupto.',
		duration: '155 min',
		rating: 8.5
	},
	{
		id: 9,
		title: 'Cidade de Deus',
		image:
			'https://m.media-amazon.com/images/S/pv-target-images/fd48c5e90ef472d9d22b770303870b2123970b76f47fa26a534bb1b7582aa6a8.jpg',
		director: 'Fernando Meirelles, Kátia Lund',
		sinopse: 'A ascensão do crime organizado no Rio de Janeiro.',
		description:
			'A história acompanha jovens crescendo em uma favela do Rio e como alguns acabam se envolvendo com o mundo do crime organizado.',
		duration: '130 min',
		rating: 8.6
	},
	{
		id: 10,
		title: 'O Pianista',
		image: 'https://aventurasnahistoria.com.br/wp-content/uploads/personagem/o_pianista_capa.jpg',
		director: 'Roman Polanski',
		sinopse: 'Um pianista judeu luta para sobreviver na Segunda Guerra.',
		description:
			'Baseado em fatos reais, acompanha a luta de Władysław Szpilman, pianista polonês, para sobreviver à ocupação nazista em Varsóvia.',
		duration: '150 min',
		rating: 8.5
	}
]);

export default films;
