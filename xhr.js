
function req(){
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/bank";
var token = "9d7b9c8e615fb98faee6514d5e3cd404556ef11b";

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: document.getElementById("BIC").value})
}

fetch(url, options)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log("error", error));

}