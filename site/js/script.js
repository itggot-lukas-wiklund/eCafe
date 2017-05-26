cart_items = []
cart_count = []
cart_categories = []

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

function addToCart(item, price, category) {
	var index = cart_items.indexOf(item);
	if (index >= 0) {
		cart_count[index]++;
	} else {
		cart_items.push(item);
		cart_count.push(1);
		cart_categories.push(category);
	}

	var cart_table = document.getElementById("cart-table");
	var content = "<tr><th>Produkt</th><th>Antal</th><th>Pris</th></tr>";
	for (i = 0; i < cart_items.length; i++) {
		item = cart_items[i];
		amnt = cart_count[i];
		content += "<tr><td>" + item + "</td><td>" + amnt + "</td><td>" + price + " kr x " + amnt + " st = " + (amnt * price) + " kr</td></tr>";
	}
	cart_table.innerHTML = content;
}
