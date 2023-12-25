// Exercice 5 //


const containerDiv = document.getElementById("container");
console.log(containerDiv);


const lists = document.querySelectorAll(".list");
lists.forEach(list => {
    list.querySelectorAll("li").forEach(item => {
        if (item.textContent === "Pete") {
            item.textContent = "Richard";
        }
    });
});

lists[1].querySelectorAll("li")[1].remove();


lists.forEach(list => {
    list.querySelector("li").textContent = "Lior";
});


lists.forEach(list => list.classList.add("student_list"));
lists[0].classList.add("university", "attendance");


containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";
lists[0].querySelectorAll("li")[lists[0].querySelectorAll("li").length - 1].style.display = "none";
lists[0].querySelectorAll("li")[1].style.border = "1px solid black";


document.body.style.fontSize = "16px";


// Exercice 6 //


const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");


const newLi = document.createElement("li");
const newText = document.createTextNode("Logout");
newLi.appendChild(newText);
navBar.querySelector("ul").appendChild(newLi);


const ul = navBar.querySelector("ul");
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

// Exercice 7 //

