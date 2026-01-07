const Express = require("express");
const app = new Express();
// 将当前目录下的文件作为静态资源暴露出去
app.use(Express.static('./'));
const port = process.env.PORT || 9000; // 使用FC默认的9000端口
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});