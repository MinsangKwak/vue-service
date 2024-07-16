<template>
	<header class="header">
		<h1 class="header-logo">
			<a href="/">My First Vue</a>
		</h1>
		<span class="header-info">
			<span>using...</span>
			<img src="./../../assets/images/logo.png" alt="vue logo" />
		</span>
	</header>
</template>

<script>
export default {
	name: "AppHeader",
};
</script>

<style scoped>
@keyframes rainbow {
	0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3rem 2rem;
	color: #111111;
	border: 1px solid #f1f1f1;
}

.header-logo a {
	text-decoration: none;
	color: #111111;
	transition: all 0.5s ease;
}

.header-logo a:hover {
	background: linear-gradient(
		45deg,
		red,
		orange,
		yellow,
		green,
		blue,
		indigo,
		violet
	);
	background-size: 400% 400%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: rainbow 3s linear infinite;
}

.header-info img {
	display: inline-block;
	max-width: 100%;
	width: 2rem;
}
</style>
