window.onscroll = changePos;

function changePos() {
	var header = document.getElementById("header");
	if (window.pageYOffset > 78) {
		header.style.position = "absolute";
		header.style.top = pageYOffset + "px";
	}else {
		header.style.position = "";
		header.style.top = "";
	}
}