// //Create A NEW ELEMENT

// const newLink = document.createElement("a");
// const containerBody = document.querySelector('.container');

// newLink.id = "myLink";
// newLink.href = "https://www.google.com";
// newLink.target = "_blank";

// newLink.appendChild(document.createTextNode("Tikla buraya"));
// containerBody.appendChild(newLink);

// console.log(containerBody);


// let divisions;
// divisions = document.createElement("p");
// divisions.appendChild(createTextNode("New time should be former times"));


// const anew = document.getElementsByClassName('container');





// anew.appendChild(divisions);
// console.log(anew);

let answers = {
    ones: [1, 2, 3, 4, 5],
    twos: ["emir", "kodalak", "jackson"],
    plase: ["name", "kods", "variance"]
};

let forters = ["emir", "can", "kaan", "portre"];

var name = function() {
    for (let i = 0; i < 10; i++) {
        const element = forters[i];
        console.log(element);
    }
}
name();