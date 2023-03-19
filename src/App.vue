<script setup>
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<v-layout>
		<v-navigation-drawer permanent>

			<v-list>

				<RouterLink to="/">
					<v-list-item prepend-avatar="src\assets\logo.png" title="Dragonnade" subtitle="v1.0.0"></v-list-item>
				</RouterLink>
			</v-list>

			<v-divider></v-divider>

			<v-list density="compact" nav>
				<v-list-item :prepend-icon="hasNotifications" title="Notifications" value="notifications"></v-list-item>
				<v-list-item prepend-icon="mdi-magnify" title="Recherche" value="search"></v-list-item>
				<v-list-item prepend-icon="mdi-file-arrow-up-down-outline" title="Tâches en cours" value="inProgress"></v-list-item>
			</v-list>

			<template v-slot:append>
				<v-list density="compact" nav>
					<v-list-item prepend-icon="mdi-cog" title="Paramètres" value="settings"></v-list-item>
				</v-list>
			</template>
		</v-navigation-drawer>

		<v-main>
			<v-container>
				<RouterView/>
			</v-container>
		</v-main>
	</v-layout>
</template>

<script>
	export default {
		data () {
			return {
				hasNotifications: "mdi-bell-badge-outline"
			}
		},
	}
</script>