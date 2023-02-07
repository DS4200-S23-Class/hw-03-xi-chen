function ScrollToBottom() {
	console.log("button was clicked, scroll to bottom!");

	// scroll the page to the end
	window.scrollTo(0, 10000);
};

function ScrollToTop() {
	console.log("button was clicked, scroll to top!");

	// get the button
	var div = document.getElementById('button-div-top');

	console.log(div);

	// scroll the page to the top
	window.scrollTo(0, div.scrollHeight);
};
