cart = []
count = []

function goToPage(pageID) {
	var home = document.getElementById("home");
	var soda = document.getElementById("soda");
	var candy = document.getElementById("candy");
	var chips = document.getElementById("chips");
	var cart = document.getElementById("cart");
	home.classList.add("hidden");
	soda.classList.add("hidden");
	candy.classList.add("hidden");
	chips.classList.add("hidden");
	cart.classList.add("hidden");

	var page = document.getElementById(pageID);
	page.classList.remove("hidden");
	document.title = toBumpyCase(pageID) + " | eCafé";
}

function toBumpyCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function addToCart(item) {
	var index = cart.indexOf(item);
	console.log(index);
	if (index >= 0) {
		count[index]++;
	} else {
		cart.push(item);
		count.push(1);
	}

	console.clear();
	console.log("Cart:");
	for (i = 0; i < cart.length; i++) {
		item = cart[i];
		amnt = count[i];
		console.log(item + ": " + amnt);
	}
}