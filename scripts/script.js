document
	.getElementById("mobile-menu-button")
	.addEventListener("click", function () {
		const expanded = this.getAttribute("aria-expanded") === "true";
		this.setAttribute("aria-expanded", !expanded);
		document.getElementById("main-nav").classList.toggle("menu-hidden");
	});
