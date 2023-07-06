"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
	label: string;
	id: string;
	type?: string;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled }) => {
	return (
		<div>
			<div className="mt-2">
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					{...register(id, { required })}
					className={clsx(
						`form-input
						h-12 
						w-96 
						pl-4 
						text-xl 
						rounded-md 
						border-0 
						outline-none 
						py-1.5 
						text-gray-900 
						shadow-sm ring-1 
						ring-inset 
						ring-gray-300 
						placeholder:text-gray-400 
						focus:ring-2 
						focus:ring-inset 
						focus:ring-sky-600
						border-l-red-500
						border-l-8`,
						errors[id] && "focus:ring-rose-500",
						disabled && "opacity-50 cursor-default"
					)}
					placeholder={label}
				/>
			</div>
		</div>
	);
}

export default Input;