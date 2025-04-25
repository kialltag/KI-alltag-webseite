<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formulardaten erhalten
    $vorname = htmlspecialchars($_POST['vorname']);
    $nachname = htmlspecialchars($_POST['nachname']);
    $email = htmlspecialchars($_POST['email']);
    $mitteilung = htmlspecialchars($_POST['mitteilung']);

    // Empfänger-E-Mail
    $empfaenger = "kialltag@proton.me";
    
    // Betreff der E-Mail
    $betreff = "Kontaktformular Anfrage von $vorname $nachname";
    
    // Nachricht (Body)
    $nachricht = "
    Vorname: $vorname\n
    Nachname: $nachname\n
    E-Mail: $email\n\n
    Mitteilung:\n
    $mitteilung
    ";
    
    // Kopfzeilen für die E-Mail
    $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();

    // E-Mail senden
    if (mail($empfaenger, $betreff, $nachricht, $headers)) {
        echo "Vielen Dank! Ihre Nachricht wurde gesendet.";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später noch einmal.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
