function showMenu() {
    var menus = document.getElementsByClassName("nav_link");
    for (var i = 0; i < menus.length; i++) {
        if (menus[i]) {
            if (menus[i].style.display === "none" || menus[i].style.display === "") {
                menus[i].style.display = "block";
            } else {
                menus[i].style.display = "none";
            }
        }
    }
}