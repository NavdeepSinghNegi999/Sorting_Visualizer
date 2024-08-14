
function Heap()
{
    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText="O(N log N)";
    // document.getElementById("Time_Average").innerText="Θ(N log N)";
    // document.getElementById("Time_Best").innerText="Ω(N log N)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(1)";

    curr_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i], divs_height[i],"red");
    div_update(divs[j], divs_height[j],"red");

    var temp = divs_height[i];
    divs_height[i] = divs_height[j];
    divs_height[j] = temp;

    div_update(divs[i], divs_height[i],"red");
    div_update(divs[j], divs_height[j],"red");

    div_update(divs[i], divs_height[i], initial_color);
    div_update(divs[j], divs_height[j], initial_color);
}



function max_heapify(n, i)
{   
    var largest = i;
    var left_child = 2*i + 1;
    var right_Child = 2*i + 2;
    
    if(left_child < n &&   divs_height[largest] < divs_height[left_child] )
    {
        if(largest != i) div_update(divs[largest], divs_height[largest], initial_color);

        largest = left_child; 

        div_update(divs[largest], divs_height[largest], "red");
    }

    if(right_Child < n && divs_height[largest] < divs_height[right_Child])
    {
        if(largest != i) div_update(divs[largest], divs_height[largest], initial_color);

        largest = right_Child;

        div_update(divs[largest], divs_height[largest], "red");
    }

    if(largest != i)
    {
        swap(largest, i);

        max_heapify(n, largest);
    }
}

function heap_sort()
{
    // Apply max heap in non-leaf node to find the largest node at root. There is (n/2 - 1) leaf in array. 
    for(var i = Math.floor(arr_total_size/2); i >= 0; i--)
    {
        div_update(divs[i], divs_height[i], "yellow");
        max_heapify(arr_total_size, i);
        div_update(divs[i], divs_height[i], initial_color);
    }
    
    // Put largest value at last, and then apply max heap (0 to ith index) to find the next maximum value and put at 0th index.
    for(var i=arr_total_size-1; i>=0; i--)
    {
        swap(0, i);               
        div_update(divs[i], divs_height[i], "green");

        max_heapify(i, 0);         // (size, index)    // we are finding maximum number at 0th index from (0 - i) range.
    }

}

