

function Selection_sort()
{
    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText="O(N^2)";
    // document.getElementById("Time_Average").innerText="Θ(N^2)";
    // document.getElementById("Time_Best").innerText="Ω(N^2)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(1)";

    curr_delay=0;

    for(var i=0;i<arr_total_size-1;i++){
        div_update(divs[i], divs_height[i],"red");

        min_index = i;

        for(var j=i+1; j<arr_total_size; j++){

            div_update(divs[j], divs_height[j],"yellow");

            if( divs_height[j] < divs_height[min_index]){
                
                // color to initial last min index height if it was not the ith height.
                if(min_index != i) div_update(divs[min_index], divs_height[min_index], initial_color);
                
                min_index = j;
                div_update(divs[min_index], divs_height[min_index],"red");
            }
            else div_update(divs[j], divs_height[j], initial_color);
            
        }
        
        if(min_index != i){
            var temp= divs_height[min_index];
            divs_height[min_index]= divs_height[i];
            divs_height[i]=temp;

            div_update(divs[min_index], divs_height[min_index],"red");
            div_update(divs[i], divs_height[i],"red");
            div_update(divs[min_index], divs_height[min_index], initial_color);
        }
        div_update(divs[i], divs_height[i],"green");
    }
    div_update(divs[i], divs_height[i],"green");

    enable_buttons();
}
