<template>
	<footer class="footer">
		<div class="footer-content">
			<a
				href="https://github.com/minsangKwak"
				target="_blank"
				class="footer-link"
			>
				<img
					src="./../../assets/images/icon-github.png"
					alt="GitHub"
					class="footer-icon"
				/>
				minsangKwak
			</a>
			<a href="mailto:kmsdevwork@gmail.com" class="footer-link">
				<img
					src="./../../assets/images/icon-gmail.png"
					alt="Gmail"
					class="footer-icon"
				/>
				kmsdevwork@gmail.com
			</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: "AppFooter",
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

.footer {
	background-color: #111111;
	color: #ffffff;
	padding: 1rem 2rem;
	text-align: center;
}

.footer-content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.footer-link {
	color: #ffffff;
	text-decoration: none;
	margin: 0.5rem 0;
	display: flex;
	align-items: center;
	transition: color 0.3s ease;
}

.footer-link:hover {
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

.footer-icon {
	width: 1.5rem;
	height: 1.5rem;
	margin-right: 0.5rem;
}
</style>
