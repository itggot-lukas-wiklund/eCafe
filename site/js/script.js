cartItems = [];
cartCount = [];
cartPrices = [];

function goToPage(pageID) {
	var home = document.getElementById("hem");
	var soda = document.getElementById("läsk");
	var candy = document.getElementById("godis");
	var chips = document.getElementById("chips");
	var cart = document.getElementById("kundvagn");
	var orderCompleted = document.getElementById("beställning_klar");

	var page = document.getElementById(pageID);
	if (page == orderCompleted) {
		if (cartItems.length == 0) {
			alert("Du kan inte betala med en tom kundvagn!");
			return;
		}

		cartItems = [];
		cartCount = [];
		cartPrices = [];
		updateCart()
	}

	home.classList.add("hidden");
	soda.classList.add("hidden");
	candy.classList.add("hidden");
	chips.classList.add("hidden");
	cart.classList.add("hidden");
	orderCompleted.classList.add("hidden");

	page.classList.remove("hidden");
	document.title = toBumpyCase(pageID) + " | eCafé";
}

function toBumpyCase(str) {
    return str.replace(/\w\S*/g, function(txt){
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function addToCart(item, price) {
	var index = cartItems.indexOf(item);
	if (index >= 0) {
		cartCount[index]++;
	} else {
		cartItems.push(item);
		cartCount.push(1);
		cartPrices.push(price);
	}

	updateCart();
}

function updateCart() {
	var cartTable = document.getElementById("cart-table");
	var content = "<tr><th>Produkt</th><th>Antal</th><th>Pris</th></tr>";
	var totalPrice = 0;
	if (cartItems.length == 0) {
		content += "<tr><td colspan='3'><h3 class='center-text'>Inga produkter i kundvagnen!</h3></td></tr>"
		cartTable.innerHTML = content;
		return;
	}
	for (i = 0; i < cartItems.length; i++) {
		var item = cartItems[i];
		var count = cartCount[i];
		var price = cartPrices[i];
		var totalItemPrice = count * price;
		content += "<tr><td>" + item + "</td><td>" + count + "</td><td>" + totalItemPrice + " kr</td></tr>";
		totalPrice += totalItemPrice;
	}
	content += "<tr><td colspan='2'></td><td class='bold'>Total: " + totalPrice + " kr</td></tr>";
	cartTable.innerHTML = content;
}
