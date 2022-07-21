window.addEventListener("load", function () {
	setTimeout(function open(event) {
		document.querySelector(".popup").style.display = "block";
	}, 1000

	)
})

document.querySelector('#close').addEventListener("click", function () {
	document.querySelector('.popup').style.display = "none";
});

// document.querySelector('.close').addEventListener("click", function () {
// 	document.querySelector('.popup').style.display = "none";
// });

function closeWindow() {
	newWindow.close();
}

function playAdudio() {
	document.getElementById("drinkbtn").addEventListener("click", function () {
		document.getElementById("audRik").play();
		console.log('clicked')
	}
	);
}


 