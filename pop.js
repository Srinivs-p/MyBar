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

function playAudio1() {
	document.getElementById("close").addEventListener("click", function () {
		document.getElementById("audRik1").play();
	}
	);
}


function playAdudio() {
	document.getElementById("drinkbtn").addEventListener("click", function () {
		document.getElementById("audRik").play();
		console.log('clicked')
	}
	);
}
