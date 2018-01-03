const intro = document.getElementById("greeting")
const selectedObj = document.getElementsByTagName("select")[0]


window.onload = () => {
  intro.innterText = "Happy Tuesday afternoon. I hope know something about Star Wars"
}

function selectCharacs() {
  console.log(selectedObj.value)
  // var e = document.getElementById(charac)
  // var user = "The Value is: " + e.options[e.selectedIndex].value + " and text is: " + e.options[e.selectedIndex].text
  // alert(user)
}



// getCharacs = () => {
//   let xhttp = new XMLHttopRequest();
//   xhttp.onreadystatechange = function() {
//     console.log(this.readyState)
//   }
//   xhttp.open("GET", "http swapi.co/api/planets/1/", true)
//   xhttp.send()
// }
