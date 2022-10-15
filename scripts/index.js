document.addEventListener("keyup", function(event) {
	if(event.key == "k") {
		console.info("hot reloading ....")
		window.location.href = "../views/index.html"
	}
})