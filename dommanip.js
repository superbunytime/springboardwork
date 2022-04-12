const container = document.getElementById("container")
const alsoContainer = document.querySelector("#container")
const liSecond = document.querySelectorAll("li.second")
const liThirdExclusive = document.querySelector("ol > li.third")
//container.innerText = "Hello" //had to comment this out to complete step 10
const footer = document.querySelector(".footer")
footer.className += " main"
footer.classList.remove("main")
const newLi = document.createElement("li")
newLi.innerText = "four"
const uList = document.querySelector("ul")
uList.appendChild(newLi)
const olLi = document.querySelectorAll("ol li")
for(let i = 0; i < olLi.length; i++){
    olLi[i].style.backgroundColor = "green"
}
footer.remove()
