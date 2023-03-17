window.addEventListener("DOMContentLoaded", (e) => {
  let name = document.createElement("h1");
  name.innerText = "Pies in the Skies";
  name.classList.add("name");
  document.body.appendChild(name);

  let positives = [
    "Stawberry Pie",
    "Apple Pie",
    "Key Lime Pie",
    "Mystery Pie",
    "Pizza",
    "Plain",
  ];
  let negatives = ["NOTHING"];

  let list = document.createElement("ul");
  list.innerHTML = "<h2>Our Menu</h2>";
  document.body.appendChild(list);

  positives.forEach((positive) => {
    let li = document.createElement("li");
    li.innerText = positive;
    list.appendChild(li);
    li.className = "detail";
  });
  // for (let i = 0; i< positives.length; i++){
  //
  // }

  list.className = "my-details";
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours() -12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const clock = document.getElementById("clock");
  clock.innerText = `${hours}: ${minutes} : ${seconds} PM`;
  console.log(clock)
};
setInterval(updateClock, 1000);
