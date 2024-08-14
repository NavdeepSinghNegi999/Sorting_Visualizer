function Bubble()
{
    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText="O(N^2)";
    // document.getElementById("Time_Average").innerText="Θ(N^2)";
    // document.getElementById("Time_Best").innerText="Ω(N)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(1)";

    curr_delay = 0;

    for(var i=0;i<arr_total_size-1;i++){
        for(var j=0; j<arr_total_size-i-1; j++){
            
            div_update(divs[j], divs_height[j], "yellow"); 

            if(divs_height[j] > divs_height[j+1]){
                div_update(divs[j], divs_height[j], "red");
                div_update(divs[j+1], divs_height[j+1], "red"); 

                var temp = divs_height[j];
                divs_height[j] = divs_height[j+1];
                divs_height[j+1] = temp;
                
                // To show changes by apply red color to both divs.
                div_update(divs[j], divs_height[j], "red"); 
                div_update(divs[j+1], divs_height[j+1], "red"); 
            }
            div_update(divs[j], divs_height[j], initial_color); 
        }
        div_update(divs[j], divs_height[j], "green");
    }
    div_update(divs[0], divs_height[0], "green");

    enable_buttons();
}

