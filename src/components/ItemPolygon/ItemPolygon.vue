<template>
	<div ref="soccerBallContainer" class="soccer-ball-container"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
	name: "ItemPolygon",
	mounted() {
		this.initThreeJS();
	},
	methods: {
		initThreeJS() {
		// Create scene
		const scene = new THREE.Scene();

		// Create camera
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 5;

		// Create renderer
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		this.$refs.soccerBallContainer.appendChild(renderer.domElement);

		// Add orbit controls
		const controls = new OrbitControls(camera, renderer.domElement);

		// Create soccer ball geometry
		const geometry = new THREE.IcosahedronGeometry(1, 2);
		const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
		const soccerBall = new THREE.Mesh(geometry, material);
		scene.add(soccerBall);

		// Resize handling
		window.addEventListener('resize', () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		});

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			// Rotate the soccer ball
			soccerBall.rotation.x += 0.01;
			soccerBall.rotation.y += 0.01;

			controls.update();
			renderer.render(scene, camera);
		};

		animate();
		},
	}
  },
};
</script>

<style scoped>
.soccer-ball-container {
	width: 100%;
	height: calc(50vh);
	position: relative;
}
</style>
