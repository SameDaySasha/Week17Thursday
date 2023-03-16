window.addEventListener("DOMContentLoaded", e => {

let name = document.createElement('h1')
name.innerText = "Christine"
name.classList.add("name")
document.body.appendChild(name)

let positives = ['Really Smart', 'Great Mom', 'Intuitive', 'Curious']
let negatives = ['NOTHING']

let list = document.createElement('ul')
document.body.appendChild(list)

positives.forEach(positive=>{
    let li = document.createElement('li')
    li.innerText = positive
    list.appendChild(li)
    li.className = 'detail'
})
// for (let i = 0; i< positives.length; i++){
//     
// }

list.className = "my-details"

})