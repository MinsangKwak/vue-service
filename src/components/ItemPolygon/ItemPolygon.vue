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
			const container = this.$refs.soccerBallContainer;
			const width = container.clientWidth;
			const height = container.clientHeight;

			// Create scene
			const scene = new THREE.Scene();

			// Create camera
			const camera = new THREE.PerspectiveCamera(
				75,
				width / height,
				0.1,
				1000
			);
			camera.position.z = 5;

			// Create renderer
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(width, height);
			renderer.setClearColor(0xffffff); // 배경색을 하얗게 설정
			container.appendChild(renderer.domElement);

			// Add orbit controls
			const controls = new OrbitControls(camera, renderer.domElement);

			// Shader material for rainbow color
			const vertexShader = `
          varying vec3 vPos;
          void main() {
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `;

			const fragmentShader = `
          varying vec3 vPos;
          void main() {
            float x = vPos.x * 0.5 + 0.5;
            gl_FragColor = vec4(abs(sin(x * 3.14159265 * 2.0)), abs(sin((x + 0.33) * 3.14159265 * 2.0)), abs(sin((x + 0.66) * 3.14159265 * 2.0)), 1.0);
          }
        `;

			const material = new THREE.ShaderMaterial({
				vertexShader: vertexShader,
				fragmentShader: fragmentShader,
			});

			// Create soccer ball geometry
			const geometry = new THREE.IcosahedronGeometry(1, 2);
			const soccerBall = new THREE.Mesh(geometry, material);
			scene.add(soccerBall);

			// Resize handling
			window.addEventListener("resize", () => {
				const width = container.clientWidth;
				const height = container.clientHeight;
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
