// Function to toggle the visibility of the macOS menu
function toggleMenu() {
    const menu = document.getElementById('macosMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Function to open the "Acerca de Nosotros" window
function openAbout() {
    document.getElementById('aboutWindow').style.display = 'flex'; // Show the About window
    document.getElementById('macosMenu').style.display = 'none';  // Hide the menu
}

// Function to close the "Acerca de Nosotros" window
function closeAboutWindow() {
    document.getElementById('aboutWindow').style.display = 'none'; // Hide the About window
}

// Function to close the tab (Simulates clicking "Salir")
function closeTab() {
    window.close(); // Close the current browser tab
}

// Function to open the "Contacto" window
function openContact() {
    document.getElementById('contactWindow').style.display = 'flex'; // Show the Contact window
    document.getElementById('macosMenu').style.display = 'none';  // Hide the menu
}

// Function to close the "Contacto" window
function closeContactWindow() {
    document.getElementById('contactWindow').style.display = 'none'; // Hide the Contact window
}

// Allow dragging the window like macOS
let isMoving = false;
let offsetX, offsetY;

function startMove(event) {
    isMoving = true;
    offsetX = event.clientX - event.target.getBoundingClientRect().left;
    offsetY = event.clientY - event.target.getBoundingClientRect().top;

    document.addEventListener('mousemove', moveWindow);
    document.addEventListener('mouseup', stopMove);
}

function moveWindow(event) {
    if (!isMoving) return;
    const windowElement = event.target.closest('.window');
    windowElement.style.left = `${event.clientX - offsetX
