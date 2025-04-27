const correctLicense = "X9QY8W3Z1K"; // Example license

function checkKey() {
  const input = document.getElementById('licenseInput').value.trim().toUpperCase();
  if (input === correctLicense) {
    localStorage.setItem('prompt_pilot_unlocked', 'true');
    document.getElementById('unlockScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  } else {
    document.getElementById('errorMessage').innerText = "❌ Invalid License Key.";
  }
}

window.onload = function() {
  if (localStorage.getItem('prompt_pilot_unlocked') === 'true') {
    document.getElementById('unlockScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  }
};

