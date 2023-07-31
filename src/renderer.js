const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

const closeBtn = document.getElementById("close-btn");
const maxBtn = document.getElementById("max-btn");
const minBtn = document.getElementById("min-btn");

const maxBtnImg = document.getElementById("max-btn-img")

function changeIcon(status){
    if(status){
        maxBtnImg.srcset = 'images/icons/restore-w-10.png 1x, images/icons/restore-w-12.png 1.25x, images/icons/restore-w-15.png 1.5x, images/icons/restore-w-15.png 1.75x, images/icons/restore-w-20.png 2x, images/icons/restore-w-20.png 2.25x, images/icons/restore-w-24.png 2.5x, images/icons/restore-w-30.png 3x, images/icons/restore-w-30.png 3.5x'
    }else{
        maxBtnImg.srcset = 'images/icons/max-w-10.png 1x, images/icons/max-w-12.png 1.25x, images/icons/max-w-15.png 1.5x, images/icons/max-w-15.png 1.75x, images/icons/max-w-20.png 2x, images/icons/max-w-20.png 2.25x, images/icons/max-w-24.png 2.5x, images/icons/max-w-30.png 3x, images/icons/max-w-30.png 3.5x'
    }
}

closeBtn.addEventListener("click", () => {
  ipc.send("closeApp");
});
maxBtn.addEventListener("click", () => {
  ipc.send("maxApp");
});
minBtn.addEventListener("click", () => {
  ipc.send("minApp");
});

ipc.on("isMaximized",()=>{
    changeIcon(true);
})
ipc.on("isRestored",()=>{
    changeIcon(false);
})