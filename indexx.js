function checkPasswords() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorText = document.getElementById("errorText");

    if (password !== confirmPassword) {
      errorText.innerText = "Passwords do not match!";
      return false; // Prevent form submission
    } else {
      errorText.innerText = "";
      return true; // Allow form submission
    }
  }

   
// Fonction pour rediriger vers la page de paiement
function redirectToPaymentPage() {
  // Remplacez "payement.html" par le chemin de votre page de paiement
  window.location.href = "payement.html";
}

// Récupérer tous les boutons "Acheter"
const acheterButtons = document.querySelectorAll(".pack-button");

// Ajouter un gestionnaire d'événement pour chaque bouton "Acheter"
acheterButtons.forEach((button) => {
  button.addEventListener("click", redirectToPaymentPage);
});
