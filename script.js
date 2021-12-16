const slideBar = document.getElementById("slideBar")
const value = document.getElementById("value")

value.innerText = slideBar.value

slideBar.oninput = function() {
    value.innerText = slideBar.value
}