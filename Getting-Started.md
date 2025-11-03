## 安装和运行

Step 1: Install Node.js
访问 Node.js 官方网站。
下载并安装最新最热的LTS
安装完成后,打开Command Prompt、PowerShell 或 macOS Terminal

```
node -v
npm -v
```

检查版本

Step 2: Clone Repo https://github.com/USC-CGSA/CGSA-Website-Vue
git不用我教吧

Step 3: Install Dependencies

```
cd CGSA-Website-Vue
npm install
```

Step 4: Run the Development Server

```
npm run serve
```

打开浏览器,访问 http://localhost:5173
你就可以在本地看到网站了，编辑文件的时候保存就会自动刷新页面

## 关于文件：

`src/router/index.ts` 是路由,可以看到每个页面的路径

`src/view/` 里面的.vue文件是页面，从这里可以改变页面内容

`src/styles/main.scss` 可以写全局class

## 关于Bootstrap5

Bootstrap提供了很多现成的class,可以直接使用
https://getbootstrap.com/docs/5.3/layout/grid/

最好用的莫过于"row" 和 "col" class用来排版

## 关于Vue

在同一个.vue文件中,可以看到`template`,`script`,`style`三部分

`template`部分是html,可以直接写标签

`script`部分是js,可以写逻辑

`style`部分是css,可以写样式

可以参考[`src/views/Home.vue`](src/views/Home.vue)或者[`src/App.vue`](src/App.vue)里面的代码

## 关于VSCode

这个repo给了extension recommendation，
Prettier和Vue

最好两个都装上，然后打开Lint on save来避免有过多的linting change

## 关于Git

在开始工作之前一定要记得先pull，如果有local commit最好是能rebase

具体怎么rebase可以参考GPT

## 草台班子，启动！

暂时先不打算做CI/CD，以下是手动更新网站的方法

## 更新网站

静态网站素材放在server上，路径为`/var/www/newsite/`

如需更新网站，在你本地机器跑
`npm run build`，这会生成一个`dist/`文件夹

然后在server上跑`rm -rf /var/www/newsite/`，再把本地的`dist/`用scp放到server上：

`scp -r dist/ cgsa-server:/var/www/newsite`

这之后网站就会自动更新在 http://www.usccgsa.com:8081/

如果你跟我一样设置了`cgsa-server`的ssh config (`~/.ssh/config`)

```bash
Host cgsa-server
    HostName 144.202.113.228
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa
```

你可以使用[deploy.sh](deploy.sh)
`./deploy.sh`直接更新
