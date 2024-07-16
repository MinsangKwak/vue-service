<template>
	<AppHeader></AppHeader>
	<AppContent></AppContent>
	<AppFooter></AppFooter>
</template>

<script>
import AppHeader from "./components/AppHeader/AppHeader.vue";
import AppContent from "./components/AppContent/AppContent.vue";
import AppFooter from "./components/AppFooter/AppFooter.vue";
export default {
	name: "App",
	components: {
		AppHeader,
		AppContent,
		AppFooter,
	},
};
</script>
