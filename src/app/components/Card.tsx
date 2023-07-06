import { FaStar, FaPlus, FaDownload } from 'react-icons/fa';

interface CardProps {
	id: number
	titre: string
	description: string
	poster_url: string
	note?: number
}

const Card: React.FC<CardProps> = ({ id, titre, description, poster_url, note }) => {
	const note_5: number | null  = note ? Math.floor(note/2) : null;

	const renderStars = () => {
		const stars: any[] = [];
		
		if (!note_5) {
			for (let i = 0; i < 5; i++) {
				stars.push(<FaStar className="text-gray-300" />)
			}

			return stars;
		}

		for (let i = 0; i < note_5; i++) {
			stars.push(<FaStar className="text-yellow-500" />)
		}

		if (stars.length < 5) {
			for (let i = note_5; i < 5; i++) {
				stars.push(<FaStar className="text-gray-300" />)
			}
		}

		return stars;
	}
	
	return (
		<div className="h-auto w-auto max-w-md bg-white shadow-md rounded-md overflow-hidden flex">
			<div className="w-1/3">
				<img
					src={`https://image.tmdb.org/t/p/original${poster_url}`}
					alt="Movie Poster"
					className="w-56"
				/>
			</div>

			<div className="flex flex-col justify-between p-4">
				<div>
					<h2 className="text-xl text-left font-bold mb-2">
						{titre}
					</h2>

					<p className="text-gray-600 text-left overflow-y-auto text-sm mb-4">
						{ description }
					</p>
				</div>
				<div className="flex items-center">
					<div className="flex space-x-1">
						{ renderStars() }
					</div>

					<div className="ml-4">
						<button className="flex items-center space-x-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							<FaPlus />
							<span>Favori</span>
						</button>
					</div>

					<div className="ml-2">
						<button className="flex items-center space-x-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
							<FaDownload />
							<span>Télécharger</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;