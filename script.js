function toggleMenu() {
    const menu = document.getElementId('macosMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openAbout() {
    const aboutWindow = document.getElementById('aboutWindow');
    aboutWindow.style.display = 'block';
}

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

function closeTab() {
    window.close();
}

function startMove(event) {
    const windowElement = event.target.closest('.window');
    let shiftX = event.clientX - windowElement.getBoundingClientRect().left;
    let shiftY = event.clientY - windowElement.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        windowElement.style.left = pageX - shiftX + 'px';
        windowElement.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    windowElement.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        windowElement.onmouseup = null;
    };
}

document.querySelectorAll('.window').forEach(windowElement => {
    windowElement.addEventListener('mousedown', startMove);
});
