const { app, BrowserWindow } = require('electron');

let mainWindow; 

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadFile('index.html');
});
const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the Login page initially
  mainWindow.loadFile('login.html');
});
const { ipcMain } = require('electron');

ipcMain.on('navigate-to-dashboard', () => {
  mainWindow.loadFile('dashboard.html');
});
ipcMain.on('navigate-to-add-patient', () => {
    mainWindow.loadFile('addPatient.html');
  });
  
  ipcMain.on('navigate-to-patient-database', () => {
    mainWindow.loadFile('patientDatabase.html');
  });
  
  ipcMain.on('navigate-to-login', () => {
    mainWindow.loadFile('login.html');
  });
  ipcMain.on('save-patient-data', (event, patientData) => {
    console.log('Patient Data Received:', patientData);
    // Save the patient data to a database or file
  });
  