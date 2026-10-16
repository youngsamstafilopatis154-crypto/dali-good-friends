# Dali 交个好朋友｜免费网站

一个可直接发布到 GitHub Pages 的纯静态官网，无构建步骤、无第三方依赖、无服务器费用。

## 本地查看

```bash
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080`。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个 **Public** 仓库，例如 `dali-good-friends`。
2. 把本目录中的文件推送到仓库 `main` 分支根目录。
3. 打开仓库 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 和 `/(root)`，保存。

发布后访问地址通常是：`https://你的用户名.github.io/dali-good-friends/`。

## 内容维护

- 首页内容：`index.html`
- 颜色和排版：`styles.css`
- 咨询生成器：`script.js`
- 图片：`assets/`

当前页面不公开电话、微信或过期价格。需要正式承接咨询时，请把首页“官方渠道”文案替换为已确认可公开的官方入口。
