const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for handling the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default mini-infobar from appearing on mobile
    event.preventDefault();
 window.deferredPrompt = event; 
    butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
    if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
        const { outcome } = await window.deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        window.deferredPrompt = null;
        butInstall.style.display = 'none';
    }
});

window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
    butInstall.style.display = 'none';
});