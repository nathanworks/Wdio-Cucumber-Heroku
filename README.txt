1. npm init -y
2. npm i @wdio/cli
3. npx wdio config
4. npx wdio run wdio.conf.js
5. to uninstall = npm uninstall -g @wdio/cli

6. npm i wdio-eslinter-service --save-dev 

 capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"]
      }
    },
  ],

