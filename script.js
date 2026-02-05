const params = new URLSearchParams(window.location.search);

let output = "";

for (let pair of params.entries()) {
    output += "<p><strong>" + pair[0] + ":</strong> " + pair[1] + "</p>";
}

document.getElementById("results").innerHTML = output;