function goToPage(pageID) {
	var home = document.getElementById("home");
	var cart = document.getElementById("cart");
	home.classList.add("hidden");
	cart.classList.add("hidden");

	var page = document.getElementById(pageID);
	page.classList.remove("hidden");
	document.title = toTitleCase(pageID) + " | eCafé";
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}