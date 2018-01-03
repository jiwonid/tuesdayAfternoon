const intro = document.getElementById("greeting")
const characsEl = document.getElementById("characs")
const selectedObj = document.getElementsByTagName("select")[0]


window.onload = () => {
  intro.innterText = "Happy Tuesday afternoon. I hope know something about Star Wars"
}

document.getElementById("subBtn").addEventListener("click", function(event){
  event.preventDefault()
});

function selectCharacs() {
  console.log(selectedObj.value)
}

// getCharacs = () => {
//   fetch('https://swapi.co/api/people/')
//   .then(r => r.json())
//   .then(people => renderCharacs(people))
// }

async function getCharacs() {
    try {
      let response = await fetch("https://swapi.co/api/people/")
      let characs = await response.json()
      renderCharacs(characs)
    } catch (error) {
      console.log(error)
    }
}

renderCharacs = (data) => {
  const characs = data["people"]
  let peopleEls = characs.map((a) => {
    let name = a["name"]
    return `<li>${name}</li>`
  })
  characsEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
}
