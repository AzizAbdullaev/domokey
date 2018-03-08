menu.onclick = function hamburger(){
	if (navigation.className === "nav-menu") navigation.className += " responsive";
	else navigation.className = "nav-menu";
}