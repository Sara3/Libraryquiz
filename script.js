
    $(function() {
        $( "#sortable" ).sortable({ 
            placeholder: "ui-sortable-placeholder" 
        });
    }); 

	function check_sort() {
		var list=[];
		var toSort = document.getElementById("sortable").children;
		for ( i = 0; i < toSort.length; i++){
			if(toSort[i].id != i+1){
			list.push(toSort[i].id)
			}
		}
		Sprint(list);
	}
		
	function numOrdA(a, b){ 
		return (a-b); 
	}
		
	function Sprint(list){
		if(list.length == 0){
		document.getElementById("demo").innerHTML = 
	    "Book list is sorted";
		
		}else{
		list.sort(numOrdA);
		document.getElementById("demo").innerHTML ="list of books misplaced:"+list.toString();
	    }
	}
	
		
