export type Film = {
	id?: number;
	image: string;
	title: string;
	director: string;
	sinopse: string;
	description: string;
	duration: string;
	rating: number;
};

export type Films = Film[];
