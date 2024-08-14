
function Insertion()
{
    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText="O(N^2)";
    // document.getElementById("Time_Average").innerText="Θ(N^2)";
    // document.getElementById("Time_Best").innerText="Ω(N)";

    // // Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(1)";

    curr_delay = 0;

    for(var i=1; i<arr_total_size; i++){

        div_update(divs[i], divs_height[i], "yellow");

        var ith_height =  divs_height[i];
        var j = i-1;

        while(j >= 0 &&  divs_height[j] > ith_height){

            div_update(divs[j], divs_height[j],"red");
            div_update(divs[j+1], divs_height[j+1],"red");

            divs_height[j+1] = divs_height[j];

            div_update(divs[j], divs_height[j],"red");
            div_update(divs[j+1], divs_height[j+1],"red");
    
            div_update(divs[j], divs_height[j], initial_color);

            if(j == (i-1)) div_update(divs[j+1], divs_height[j+1],"yellow");
            else           div_update(divs[j+1], divs_height[j+1],initial_color);
            
            j -= 1;
        }

        divs_height[j+1] = ith_height;

        for(var t=0; t<i; t++) div_update(divs[t], divs_height[t],"green");
        
    }

    div_update(divs[i-1], divs_height[i-1],"green");

    enable_buttons();
}
