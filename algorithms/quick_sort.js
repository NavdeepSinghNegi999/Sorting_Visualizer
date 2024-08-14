

function Quick()
{
    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText="O(N^2)";
    // document.getElementById("Time_Average").innerText="Θ(N log N)";
    // document.getElementById("Time_Best").innerText="Ω(N log N)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(log N)";

    curr_delay=0;

    quick_sort(0,arr_total_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start, j = end;
    var pivot =  divs_height[start];
    div_update(divs[start], divs_height[start], "yellow");

    while(i < j){
        while(divs_height[i] <= pivot) i++;
        while(divs_height[j] > pivot) j--;

        if(i < j){
            div_update(divs[i], divs_height[i], "red");
            div_update(divs[j], divs_height[j], "red");

            var temp = divs_height[i];
            divs_height[i] = divs_height[j];
            divs_height[j] = temp;

            div_update(divs[i], divs_height[i], "red");
            div_update(divs[j], divs_height[j], "red");

            div_update(divs[i], divs_height[i],initial_color);
            div_update(divs[j], divs_height[j],initial_color);

        }
    }


    div_update(divs[start], divs_height[start],"red");
    div_update(divs[j], divs_height[j],"red");

    var temp= divs_height[start];
    divs_height[start] = divs_height[j];
    divs_height[j] = temp;

    div_update(divs[start], divs_height[start], "red");
    div_update(divs[j], divs_height[j], "red");

    div_update(divs[j], divs_height[j], "green");

    return j;
}

function quick_sort(start, end)
{
    if( start <= end )
    {
        var pivot_index = quick_partition(start, end) ;     
        quick_sort(start, pivot_index - 1);
        quick_sort(pivot_index + 1, end) ;
    }
}
