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
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    initThreeJS() {
      // 장면 생성
      const scene = new THREE.Scene();

      // 카메라 생성
      const camera = new THREE.PerspectiveCamera(75, this.$refs.soccerBallContainer.clientWidth / this.$refs.soccerBallContainer.clientHeight, 0.1, 1000);
      camera.position.z = 5;

      // 렌더러 생성
      const renderer = new THREE.WebGLRenderer({ alpha: true }); // 배경을 투명하게 설정
      renderer.setSize(this.$refs.soccerBallContainer.clientWidth, this.$refs.soccerBallContainer.clientHeight);
      renderer.setClearColor(0x000000, 0); // 배경을 투명하게 설정
      this.$refs.soccerBallContainer.appendChild(renderer.domElement);

      // 궤도 컨트롤 추가
      const controls = new OrbitControls(camera, renderer.domElement);

      // 축구공 지오메트리 생성
      const geometry = new THREE.IcosahedronGeometry(1, 2);
      const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true }); // 선의 색을 검은색으로 설정
      const soccerBall = new THREE.Mesh(geometry, material);
      scene.add(soccerBall);

      // 창 크기 조정 처리
      this.onWindowResize = () => {
        const width = this.$refs.soccerBallContainer.clientWidth;
        const height = this.$refs.soccerBallContainer.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

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
  }
};
</script>

<style scoped>
.soccer-ball-container {
  width: 100%;
  height: 100%; /* 부모 요소에 맞춰서 크기 설정 */
  position: relative;
}
</style>
