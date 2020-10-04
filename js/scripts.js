document.addEventListener("DOMContentLoaded", function() {
    
    var year_label = document.getElementById("copyrightYear");
    year_label.innerHTML = new Date().getFullYear();
});