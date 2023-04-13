var title_array = {
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