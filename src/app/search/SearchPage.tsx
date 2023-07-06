import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Input from "../components/Input";
import { useState } from "react";

const SearchPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
		defaultValues: {
			search: ""
		}
	});
	
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		return;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				id="search"
				label="Search"
				type="text"
				register={register}
				errors={errors}
				disabled={isLoading} />
		</form>
	);
}

export default SearchPage;