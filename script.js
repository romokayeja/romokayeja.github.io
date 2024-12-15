function closeAboutWindow() {
    const aboutWindow = document.getElementById('aboutWindow');
    aboutWindow.style.display = 'none';
}

function minimizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}

function maximizeWindow(windowId) {
    const windowElement = document.getElementById(windowId);
    windowElement.style.width = '100%';
    windowElement.style.height = '100%';
    windowElement.style.top = '0';
    windowElement.style.left = '0';
    windowElement.style.transform = 'none';
}
