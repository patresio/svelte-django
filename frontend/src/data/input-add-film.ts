const inputAdd = [
	{
		type: 'file',
		value: '',
		id: 'image',
		label: 'Image',
		required: false,
		error: false
	},
	{
		type: 'text',
		placeholder: 'Title',
		value: '',
		id: 'title',
		label: 'Title',
		required: true,
		error: false
	},
	{
		type: 'text',
		placeholder: 'Director',
		value: '',
		id: 'director',
		label: 'Director',
		required: true,
		error: false
	},
	{
		type: 'text',
		placeholder: 'Sinopse',
		value: '',
		id: 'sinopse',
		label: 'Sinopse',
		required: true,
		error: false
	},
	{
		type: 'text',
		placeholder: 'Description',
		value: '',
		id: 'description',
		label: 'Description',
		required: true,
		error: false
	},
	{
		type: 'number',
		placeholder: 'Duration',
		value: '',
		id: 'duration',
		label: 'Duration',
		required: true,
		min: 0,
		error: false
	},
	{
		type: 'number',
		placeholder: 'Rating',
		value: '',
		id: 'rating',
		label: 'Rating',
		required: true,
		min: 0,
		max: 10,
		step: 0.1,
		error: false
	}
];

export default inputAdd;
