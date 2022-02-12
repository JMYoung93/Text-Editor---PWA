const btnInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {

    // Store events
    window.deferredPrompt = event;

    // Deletes hidden button class.
    btnInstall.classList.toggle('hidden', false);
  });

btnInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, since it can only be used once.
  window.deferredPrompt = null;
  
  btnInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 
