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
			// 장면 생성
			const scene = new THREE.Scene();

			// 카메라 생성
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			camera.position.z = 5;

			// 렌더러 생성
			const renderer = new THREE.WebGLRenderer({ alpha: true }); // 배경을 투명하게 설정
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setClearColor(0x000000, 0); // 배경을 투명하게 설정
			this.$refs.soccerBallContainer.appendChild(renderer.domElement);

			// 궤도 컨트롤 추가
			const controls = new OrbitControls(camera, renderer.domElement);

			// 축구공 지오메트리 생성
			const geometry = new THREE.IcosahedronGeometry(1, 2);
			const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true }); // 선의 색을 검은색으로 설정
			const soccerBall = new THREE.Mesh(geometry, material);
			scene.add(soccerBall);

			// 애니메이션 루프
			const animate = () => {
				requestAnimationFrame(animate);

				// 축구공 회전
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
