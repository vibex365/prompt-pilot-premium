document.addEventListener("DOMContentLoaded", function() {
  const correctLicense = "X9QY8W3Z1K"; // Working License

  const unlockButton = document.getElementById('unlockButton');
  const unlockScreen = document.getElementById('unlockScreen');
  const dashboard = document.getElementById('dashboard');
  const errorMessage = document.getElementById('errorMessage');

  if (localStorage.getItem('prompt_pilot_unlocked') === 'true') {
    unlockScreen.style.display = "none"; 
    dashboard.style.display = "block";    
  }

  if (unlockButton) {
    unlockButton.addEventListener('click', function() {
      const input = document.getElementById('licenseInput').value.trim().toUpperCase();
      console.log("Entered license:", input);

      if (input === correctLicense) {
        localStorage.setItem('prompt_pilot_unlocked', 'true');
        unlockScreen.style.display = "none";
        dashboard.style.display = "block";
      } else {
        if (errorMessage) {
          errorMessage.innerText = "❌ Invalid License Key.";
        }
      }
    });
  }
});
