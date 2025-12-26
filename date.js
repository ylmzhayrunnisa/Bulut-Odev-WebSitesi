
// Function to update the clock
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display the time in the "clock" element
    document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;

    // Update the clock every second
    setTimeout(updateClock, 1000);
}
updateClock();