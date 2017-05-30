cart_items = [];
cart_count = [];
cart_prices = [];
cart_categories = [];

function goToPage(pageID) {
	var home = document.getElementById("hem");
	var soda = document.getElementById("läsk");
	var candy = document.getElementById("godis");
	var chips = document.getElementById("chips");
	var cart = document.getElementById("kundvagn");
	var checkout = document.getElementById("kassa");
	home.classList.add("hidden");
	soda.classList.add("hidden");
	candy.classList.add("hidden");
	chips.classList.add("hidden");
	cart.classList.add("hidden");
	checkout.classList.add("hidden");

	var page = document.getElementById(pageID);
	page.classList.remove("hidden");
	document.title = toBumpyCase(pageID) + " | eCafé";
}

function toBumpyCase(str) {
    return str.replace(/\w\S*/g, function(txt){
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function addToCart(item, price, category) {
	var index = cart_items.indexOf(item);
	if (index >= 0) {
		cart_count[index]++;
	} else {
		cart_items.push(item);
		cart_count.push(1);
		cart_prices.push(price);
		cart_categories.push(category);
	}

	var cartTable = document.getElementById("cart-table");
	var content = "<tr><th>Produkt</th><th>Antal</th><th>Pris</th></tr>";
	var totalPrice = 0;
	for (i = 0; i < cart_items.length; i++) {
		var item = cart_items[i];
		var count = cart_count[i];
		var price = cart_prices[i];
		var totalItemPrice = count * price;
		content += "<tr><td>" + item + "</td><td>" + count + "</td><td>" + price + " kr x " + count + " st = " + totalItemPrice + " kr</td></tr>";
		totalPrice += totalItemPrice;
	}
	content += "<tr><td colspan='2'></td><td class='bold'>Total: " + totalPrice + " kr</td></tr>";
	cartTable.innerHTML = content;
}
