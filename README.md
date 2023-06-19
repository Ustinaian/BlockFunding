# 区块链大作业项目：BlockFunding

**基于区块链的去中心化众筹平台**

- 使用了Solidity+Hardhat+Ethers.js+React.js+Bootstrap

### 可点击查看URL= "https://ustinaian.github.io/BlockFunding/"

- 
- 
- **在使用之前，需安装依赖**，使用：

- > npm install

- contracts文件夹中为合约代码

- 使用项目前需添加.env文件，其中需包含ALCHEMY_URL和PRIVATE_KEY

- > ALCHEMY_URL='https://eth-sepolia.g.alchemy.com/v2/JQF_vyoy-dQNAYWvWJBtvDf1tP1jXAwj'
  >
  > PRIVATE_KEY='你的钱包私钥'

- 然后进行合约的部署：

- > npx hardhat run scripts/deploy.js --network sepolia



- **其中BlockFunding为前端项目文件夹**

- 运行项目：

- > npm start



- **如若需要使用Github Pages**，则：

  - 先把BlockFunding文件夹中的build文件夹删除

  - 安装 GitHub Pages 插件：``` npm install gh-pages --save-dev```

  - 在 `package.json` 文件中添加以下内容：

    - ``` 
      "homepage": "https://<GitHub 用户名>.github.io/<仓库名称>",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
      ```

  - 使用以下命令构建并部署项目：

    - ```
      npm run deploy
      ```

    - 将会在github仓库中创建一个名为gh-pages的分支

  - 然后在github仓库中点击settings-pages，在Source下选择Deploy from a branch，然后branch下面选择gh-pages的分支以及/(root)，点击save

  - 等待一段时间后则可点击链接``` https://<GitHub 用户名>.github.io/<仓库名称>```访问项目
