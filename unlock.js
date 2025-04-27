document.addEventListener("DOMContentLoaded", function() {
  const correctLicense = "X9QY8W3Z1K"; // Your working license key

  const unlockButton = document.getElementById('unlockButton');
  if (unlockButton) {
    unlockButton.addEventListener('click', checkKey);
  }

  if (localStorage.getItem('prompt_pilot_unlocked') === 'true') {
    showDashboard();
  }

  function checkKey() {
    const input = document.getElementById('licenseInput').value.trim().toUpperCase();
    console.log("User entered license:", input);

    if (input === correctLicense) {
      localStorage.setItem('prompt_pilot_unlocked', 'true');
      showDashboard();
    } else {
      const errorMessage = document.getElementById('errorMessage');
      if (errorMessage) {
        errorMessage.innerText = "❌ Invalid License Key.";
      }
    }
  }

  function showDashboard() {
    const unlockScreen = document.getElementById('unlockScreen');
    const dashboard = document.getElementById('dashboard');
    if (unlockScreen && dashboard) {
      unlockScreen.classList.add('hidden');
      dashboard.classList.remove('hidden');
    }
  }
});
