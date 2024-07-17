# sample-service
- Vue.js로 작성된 예제 서비스입니다.

## Project Link
- <a href="https://minsangkwak.github.io/vue-service/" target="_blank">https://minsangkwak.github.io/vue-service/</a>

## Project Detail
- language: javaScript
- package-manager:Yarn
- Framework: Vue.js
- 3D Graphic Library: Three.js

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Project Detail
- App.vue: 루트 컴포넌트로, 헤더, 콘텐츠 및 푸터 섹션을 포함합니다.
- index.html: 메인 HTML 파일로, 페이지 구조를 설정하고 필요한 메타 태그와 링크를 포함합니다.
- AppContent.vue: 메인 콘텐츠 영역을 위한 컴포넌트로, ItemPolygon 컴포넌트를 포함합니다.
- ItemPolygon.vue: Three.js를 사용하여 3D 축구공을 표시하는 컴포넌트입니다.