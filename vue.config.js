const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath:
		process.env.NODE_ENV === "production"
			? "/<repository-name>/" // 여기서 <repository-name>을 GitHub 저장소 이름으로 변경합니다.
			: "/",
});
