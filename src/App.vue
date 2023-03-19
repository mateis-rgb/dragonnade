<script setup>
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<v-layout>
		<v-navigation-drawer permanent>
			<v-list>
				<v-list-item prepend-avatar="src\assets\logo.png" title="Dragonnade" subtitle="v1.0.0"></v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list density="compact" nav>
				<RouterLink to="/">
					<v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
				</RouterLink>
				<v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
				<v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<v-container>
			</v-container>
		</v-main>
	</v-layout>

	<RouterView />
</template>