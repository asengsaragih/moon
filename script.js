//get all moon image
let images = [];
let count = 0;

for (let i = 0; i < 30; i++) {
    images[i] = "src/moon-" + i + ".png";
}
//end get all moon image

//main function for rotating moon
function rotateMoon() {
    //change image
    document.getElementById("moon-canvas").src = images[count];

    //validate count
    (count == images.length - 1) ? count = 0 : count++;

    //recrusive function
    window.setTimeout(function() {
		rotateMoon();
	}, (getSpeed() == null) ? 500 : getSpeed());
}

//GET attribut url speed
function getSpeed() {
    var raw = window.location.href;
    var url = new URL(raw);

    return url.searchParams.get("speed");
}