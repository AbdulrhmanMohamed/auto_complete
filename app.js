// request data from placeholder api
var xhr = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/users";
xhr.open("GET", url);
xhr.send();
// xhr.addEventListener('loadend',fucntion(){})
xhr.onload = function() {
    if (xhr.status == 200 && xhr.readyState == 4) {
        var res2 = JSON.parse(xhr.responseText);
        console.log(res2);
        data(res2);
    }
};
var elements = [];
// create each element depends on the user data
function createElements(ele) {
    var table = document.querySelector(".table");
    var element = document.createElement("div");
    element.classList.add("element");
    var name = document.createElement("div.name");
    var email = document.createElement("div.email");
    var address = document.createElement("div.add");
    name.innerText = ele.username;
    email.innerText = ele.email;
    address.innerText = ele.address.street;
    element.append(name, email, address);
    table.append(element);
    elements.push(element);
}

function data(res2) {
    res2.forEach(function(ele, index) {
        createElements(ele);
    });
}
var search = document.querySelector(".input_field input");
search.addEventListener("keyup", function() {
    // console.log(this.value);
    filter(this.value);
});
// search based to the user input {auto complete effect}
function filter(userSearch) {
    elements.forEach(function(ele, i) {
        if (elements[i].children[0].innerText.trim().startsWith(userSearch)) {
            elements[i].style.display = "flex";
        } else {
            elements[i].style.display = "none";
        }
    });
}

// take array of user name