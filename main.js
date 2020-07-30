function displayButton(button) {
    button = document.getElementById("buttons")
    if (button.style.display === "none") {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
}