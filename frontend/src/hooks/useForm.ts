import { writable } from 'svelte/store';

export interface FormField {
    type: string;
    value: string;
    id: string;
    label: string;
    required: boolean;
    error: string;
    placeholder?: string;
    minLength?: number;
    min?: number;
    max?: number;
    step?: number;
}

export function useForm(initialInputs: FormField[]) {
    const initialState = JSON.parse(JSON.stringify(initialInputs));
	const inputs = writable(initialState);

	function validate(input: FormField) {
		if (input.required && !input.value) {
			input.error = 'Este campo é obrigatório';
		} else if (input.minLength && input.value.length < input.minLength) {
			input.error = `O campo deve ter no mínimo ${input.minLength} caracteres`;
		} else {
			input.error = '';
		}
		return input;
	}

	function validateAll() {
		inputs.update(currentInputs => {
			return currentInputs.map(validate);
		});
	}

    function reset() {
        inputs.set(JSON.parse(JSON.stringify(initialInputs)));
    }

	return {
		inputs,
		validate,
		validateAll,
        reset
	};
}
