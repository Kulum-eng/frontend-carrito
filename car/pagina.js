
document.getElementById("forward").addEventListener("click", () => sendCommand("forward"));
document.getElementById("backward").addEventListener("click", () => sendCommand("backward"));
document.getElementById("left").addEventListener("click", () => sendCommand("left"));
document.getElementById("right").addEventListener("click", () => sendCommand("right"));
document.getElementById("stop").addEventListener("click", () => sendCommand("stop"));
document.getElementById("lights").addEventListener("click", () => sendCommand("lights"));

function sendCommand(command) {
    fetch(`http://${command}`)
        .then(response => console.log(`Comando enviado: ${command}`))
        .catch(error => console.error("Error:", error));
}
