const { app, BrowserWindow } = require('electron')

function createWindow () {
  // 브라우저 창을 생성합니다.
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.maximize()
  // 그리고 앱의 index.html를 로드합니다.
  win.loadURL('http://localhost:3000/')
}

app.whenReady().then(createWindow)