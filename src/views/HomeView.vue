<template>
	<v-carousel v-for="film in films" :key="film.id">
		<v-carousel-item
			src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
			cover
		></v-carousel-item>
	</v-carousel>
</template>

<script>
	const ApiKey = "0293d91336f24456e99f760516752b4f";

	/**
	 * 
	 * @param {String} url 
	 */
	async function get (url) {
		let response = await fetch (url);
		let data = await response.json();
		
		console.log(data)
	}

	console.log(get ("https://api.themoviedb.org/3/discover/movie?api_key=0293d91336f24456e99f760516752b4f&language=fr-FR&sort_by=popularity.desc&certification_country=fr-FR&include_adult=false&include_video=false&page=1&year=2023&with_watch_monetization_types=flatrate"));


	export default {
		data () {
			return {
				films: []
			}
		}	
	}
</script>