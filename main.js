const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html').catch(console.error)
}

app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', function () {
  app.quit()
})