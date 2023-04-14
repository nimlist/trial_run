/* var title_array = {
    title1: 'Dr.',
    title2: 'Miss',
    title3: 'Mr.',
    title4: 'Mrs.',
    title5: 'Prof.'
};

var select = document.getElementById("drop--btn");
for (index in title_array){
    select.options[select.options.length] = new Option (title_array[index], index);
}
*/

/*
var title_array = {
    ValueDr : 'Dr.',
    ValueMiss : 'Miss',
    ValueMr : 'Mr.',
    ValueMrs : 'Mrs.',
    ValueProf : 'Prof.'
};

var select = document.getElementById("drop--btn");
for(index in title_array) {
    select.options[select.options.length] = new Option(title_array[index], index);
} */

const dropbtn = document.getElementById("dropbtn");

const titles = ["Dr.", "Miss", "Mr.", "Mrs.", "Prof."];

for (let key in titles) {

console.log(dropbtn)
    let option = document.createElement("option");
    option.setAttribute('value', titles[key]);
  
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);
  
    dropbtn.appendChild(option);
  }