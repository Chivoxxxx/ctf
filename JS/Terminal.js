const sentences = [
    "Initializing quantum hacking algorithms...",
    "Executing stealth mode protocols...",
    "Decrypting alien encryptions...",
    "Generating wormhole access codes...",
    "Uploading mind-bending viruses...",
    "Constructing virtual reality interfaces...",
    "Accessing parallel dimensions...",
    "Engaging hyperdrive for cyber exploration..."
];

let currentSentenceIndex = 0;
let currentLetterIndex = 0;

function typeSentence() {
    if (currentSentenceIndex >= sentences.length) {
        document.querySelectorAll('.message').forEach(message => message.style.display = 'none');
        document.getElementById('pressAnyKey').style.display = 'block';
        return;
    }

    const sentence = sentences[currentSentenceIndex];
    const sentenceId = `sentence${currentSentenceIndex + 1}`;

    const sentenceElement = document.getElementById(sentenceId);

    if (currentLetterIndex < sentence.length) {
        sentenceElement.textContent += sentence[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(typeSentence, 10); // Adjust the typing speed here (lower value means faster typing)
    } else {
        currentSentenceIndex++;
        currentLetterIndex = 0;
        setTimeout(typeSentence, 500); // Delay between sentences
    }
}

typeSentence();

// Redirect to home page when any key is pressed
document.addEventListener('keypress', function() {
    window.location.href = "Home.html"; // Replace with your home page URL
});