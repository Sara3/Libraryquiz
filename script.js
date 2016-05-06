
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
$(function() {
        $( "#sortable" ).sortable({ 
            placeholder: "ui-sortable-placeholder" 
        });
    }); 

		
	function numOrdA(a, b){ 
		return (a-b); 
	}
		
	function Sprint(list){
		if(list.length == 0){  
            alert("The Books are sorted!!");
            window.location.href ="index"+num+".html";
 
		}else{
		list.sort(numOrdA);
		document.getElementById("demo").innerHTML ="list of books misplaced:"+list.toString();
	    }
	}
	
		
