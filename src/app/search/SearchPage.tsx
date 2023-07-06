import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Input from "../components/Input";
import { useState } from "react";
import Card from "../components/Card";

const ApiKey = "34e45a2d9396dd651328c0bddeea94d5";
// const ApiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGU0NWEyZDkzOTZkZDY1MTMyOGMwYmRkZWVhOTRkNSIsInN1YiI6IjYzMTI2Mzk3MjE2MjFkMDA4MjAzNTUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gQ-A6YrCnWxManUtlRZM75JbsD9StNIlWqyIsECctM";

const SearchPage = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
		defaultValues: {
			search: ""
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const { search } = data; 
		
		const response = await fetch (`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${ApiKey}&language=fr-FR`);
		const res_data = await response.json();
		
		// code here...
	}

	return (
		<div className="text-center pt-4">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div className="text-5xl text-gray-900 pb-2">
						Rechercher un film ou une série
					</div>

					<Input
						id="search"
						label="Rechercher..."
						type="text"
						register={register}
						errors={errors}
						disabled={isLoading} 
					/>
				</div>
			</form>

			<div className="pt-6">
				<div className="flex flex-col">
					<Card 
						id={207703} 
						titre="Kingsman: The Secret Service" 
						description="Kingsman, l'élite du renseignement britannique en costumes 3 pièces, est à la recherche de sang neuf."
						poster_url="/enDe6WbsUu5wqRmqLdgByyjgIwL.jpg"
						note={7.87454}						
					/>
				</div>
			</div>
		</div>
	);
}

export default SearchPage;