function HandleClick() {
    var button = document.getElementById('nav');

    if (button.classList.contains("selection")){
        button.classList.remove("selection");
    }
    else {
        button.classList.add("selection");
    }    
}