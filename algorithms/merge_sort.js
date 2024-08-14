

function Merge()
{
    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText="O(N log N)";
    // document.getElementById("Time_Average").innerText="Θ(N log N)";
    // document.getElementById("Time_Best").innerText="Ω(N log N)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText="O(N)";

    curr_delay=0;

    merge_sort(0, arr_total_size-1);

    enable_buttons();
}


function merge(start, mid, end){

    
    var i=start, j=mid+1;
    var arr = [], k=0;

    while(i <= mid && j <= end){
        if(divs_height[i] < divs_height[j]){
            arr[k++] = divs_height[i];
            div_update(divs[i], divs_height[i], "red");
            i++;
        }
        else{
            arr[k++] = divs_height[j];
            div_update(divs[j], divs_height[j], "red");
            j++;
        }
    }

    while(i <= mid){
        arr[k++] = divs_height[i];
        div_update(divs[i], divs_height[i], "red");
        i++;
    }

    while(j <= end){
        arr[k++] = divs_height[j];
        div_update(divs[j], divs_height[j], "red");
        j++;
    }


    for(var t=0; t<k; t++)
    {
        divs_height[start++] = arr[t];
        div_update(divs[start-1], divs_height[start-1], "green");
    }
}

function merge_sort(start,end)
{
    if(start < end)
    {
        var mid = Math.floor((start + end) / 2);
        
        div_update(divs[mid], divs_height[mid], "yellow");

        merge_sort(start,mid);
        merge_sort(mid+1,end);

        merge(start,mid,end);
    }
}


