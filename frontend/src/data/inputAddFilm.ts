import type { FormField } from '../hooks/useForm';

const inputAdd: FormField[] = [
	{
		type: 'text',
		placeholder: 'Titulo',
		value: '',
		id: 'title',
		label: 'Titulo',
		required: true,
		error: '',
		minLength: 3
	},
	{
		type: 'text',
		placeholder: 'Diretor',
		value: '',
		id: 'director',
		label: 'Diretor',
		required: true,
		error: '',
		minLength: 7
	},
	{
		type: 'text',
		placeholder: 'Sinopse',
		value: '',
		id: 'sinopse',
		label: 'Sinopse',
		required: true,
		error: '',
		minLength: 10
	},
	{
		type: 'text',
		placeholder: 'Descrição',
		value: '',
		id: 'description',
		label: 'Descrição',
		required: true,
		error: '',
		minLength: 10
	},
	{
		type: 'number',
		placeholder: 'Duração',
		value: '',
		id: 'duration',
		label: 'Duração',
		required: true,
		min: 0,
		error: ''
	},
	{
		type: 'number',
		placeholder: 'Nota',
		value: '',
		id: 'rating',
		label: 'Nota',
		required: true,
		min: 0,
		max: 10,
		step: 0.1,
		error: ''
	}
];

export default inputAdd;
