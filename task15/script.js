

let greetBtn = document.querySelector("#greetBtn")
let nameInput = document.querySelector("#userInput")
let header = document.querySelector("#userName")



let boxes = document.querySelectorAll(".box")

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        const color = box.getAttribute('data-color');
        box.style.backgroundColor = color;
    })
})
// console.log(boxesArray)


greetBtn.addEventListener('click', () => {
    let name = nameInput.value
    header.innerHTML = `Hello, ${name}`
})