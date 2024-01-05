function toggleButtonText(buttonNumber) {
    var button = document.querySelector('button:nth-child(' + buttonNumber + ')');
    
    if (button.innerHTML.trim() === "") {
        button.innerHTML = "X";
    }
}