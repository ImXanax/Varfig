const { MSICreator } = require('electron-wix-msi');
const path = require('path')
const APP_DIR = path.resolve(path.join(__dirname,'./out/Varfig-win32-x64'))

const OUT_DIR = path.resolve(path.join(__dirname,'./out/windows_installer'))
const ICON = path.resolve(path.join(__dirname,'logo.ico'))
// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,
  description: 'Computer configurator',
  exe: 'varfig',
  name: 'VARFIG',
  manufacturer: 'Xanax',
  version: '1.1.2',
  icon: ICON,
});

// Step 2: Create a .wxs template file
msiCreator.create().then(async ()=>{
    await msiCreator.compile();
})

// // 🆕 Step 2a: optionally sign support binaries if you
// // sign you binaries as part of of your packaging script
// supportBinaries.forEach(async (binary) => {
//   // Binaries are the new stub executable and optionally
//   // the Squirrel auto updater.
//   await signFile(binary);
// });

// Step 3: Compile the template to a .msi file
