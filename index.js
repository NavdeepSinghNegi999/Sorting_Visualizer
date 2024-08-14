var arr_size_field              = document.getElementById('arr_size');
var array_generate_button       = document.getElementById("array_generate");
var algorithm_speed_field       = document.getElementById("algorithm_speed");




var divs          = [];
var divs_height   = [];
var margin_size;
var initial_color = '#9E86FE';
var arr_total_size = arr_size_field.value;
var button_algorithm = document.querySelectorAll(".algorithm button");
var content = document.getElementById("divs_container");
content.style = "flex-direction:row";


array_generate_button.addEventListener("click",generate_array);
arr_size_field.addEventListener("input", update_array_total_size);



// Generate new array function.
function generate_array(){
    content.innerHTML = "";

    for(var i=0; i<arr_total_size; i++){
        
        // generate line height inclusive range [10, 74] of array size.
        divs_height[i] = Math.floor(Math.random() * 0.5 * (arr_size_field.max - arr_size_field.min) ) + 10; 
        
        divs[i] = document.createElement("div");
        content.appendChild(divs[i]);
        margin_size = 0.1;

        Object.assign(divs[i].style, {
            backgroundColor: initial_color,
            width: (100/arr_total_size-(2*margin_size)) + "%",
            height: (divs_height[i]) + "%",
            margin: margin_size + "%"
        });
    }
}

// update array total size when recieve input.
function update_array_total_size(){
    arr_total_size = arr_size_field.value;
    generate_array();
}



// Run update_array_total_size when the window is loaded.
window.onload = update_array_total_size();


//Running the appropriate algorithm.
for(var i=0; i<button_algorithm.length; i++){
    button_algorithm[i].addEventListener("click", runAlgorithm);
}


// It will disable the buttons when algorithm run.
function disable_buttons(){
    for(var i=0; i<button_algorithm.length; i++)
    {
        button_algorithm[i].classList = [];
        button_algorithm[i].classList.add("button_locked");

        button_algorithm[i].disabled = true;

        arr_size_field.disabled = true;
        array_generate_button.disabled = true;
        algorithm_speed_field.disabled = true;
    }
}


function runAlgorithm(){
    disable_buttons();

    this.classList.add("button_selected");

    switch(this.innerHTML){
        case "Bubble":
            Bubble(); 
            break;

        case "Selection":
            Selection_sort();
            break;

        case "Insertion":
            Insertion();
            break;

        case "Merge":
            Merge();
            break;

        case "Quick":
            Quick();
            break;

        case "Heap":
            Heap();
            break;
    }
}




// helper function


algorithm_speed_field.addEventListener("input",vis_speed);

var speed=1000;
var curr_delay = 0; 
var delay_time = 10000/(Math.floor(arr_total_size/10) * speed);      


function vis_speed(){
    var array_speed = algorithm_speed_field.value;
    
    switch(parseInt(array_speed)){
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time = 10000/(Math.floor(arr_total_size/10)*speed);     
}


function div_update(content,height,color){
    window.setTimeout(function(){
        Object.assign(content.style, {
            backgroundColor: color,
            width: (100/arr_total_size-(2*margin_size)) + "%",
            height: height + "%",
            margin: margin_size + "%"
        });
    },curr_delay += delay_time);
}

function enable_buttons(){
    window.setTimeout(function(){
        for(var i=0; i<button_algorithm.length; i++){

            button_algorithm[i].classList=[];
            button_algorithm[i].classList.add("button_unselected");

            button_algorithm[i].disabled=false;
            arr_size_field.disabled = false;
            array_generate_button.disabled = false;
            algorithm_speed_field.disabled = false;
        }
    },curr_delay += delay_time);
}   

