const { ipcRenderer } = require('electron')

document.getElementById("closeWindowButton").onclick = function() {
	ipcRenderer.send("close")
}
