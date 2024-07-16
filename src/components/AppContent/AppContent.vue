<template>
	<main class="main">
		<ItemPolygon></ItemPolygon>
	</main>
</template>

<script>
import ItemPolygon from "../../components/ItemPolygon/ItemPolygon.vue";
export default {
	name: "AppComponent",
	components: { ItemPolygon },
};
</script>

<style scoped>
.main {
	padding: 0 2rem;
	height: calc(100vh - 15.6rem);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
