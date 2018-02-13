function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, sign, col, switchcount = 0;
	table = document.getElementById("myTable2");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc"; 
	/*Make a loop that will continue until no switching has been done:*/
	while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
		
        for (i = 1; i < (rows.length - 1); i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
          if (dir == "asc") {
			if (n < 7) {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else {
				if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					console.log("rate asc");
					break;
				}
			}
          } else if (dir == "desc") {
			if (n < 7) {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					break;
				}
			} else {
				if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
					//if so, mark as a switch and break the loop:
					shouldSwitch= true;
					console.log("rate desc");
					break;
				}
			}
          }
        }
		
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          //Each time a switch is done, increase this count by 1:
          switchcount ++; 
        } else {
          /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
	}
	//sorted tag
	rows = table.getElementsByTagName("TR");
	col = rows[0].getElementsByTagName("TH")[n+1];
	if (dir == "asc") {
		sign = "<i class=\"fa fa-sort-asc\"></i>";
	} else {
		sign = "<i class=\"fa fa-sort-desc\"></i>";
	}
	//Reset tag
	rows[0].getElementsByTagName("TH")[1].innerHTML = "課程代碼<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[2].innerHTML = "通識向度<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[3].innerHTML = "課程名稱<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[4].innerHTML = "學分<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[5].innerHTML = "授課老師<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[6].innerHTML = "上課時間<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[7].innerHTML = "教室<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[8].innerHTML = "選課人數<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[9].innerHTML = "限制人數<i class=\"fa fa-sort\"></i>";
	rows[0].getElementsByTagName("TH")[10].innerHTML = "選課率<i class=\"fa fa-sort\"></i>";
	//Set
	col.innerHTML = col.innerHTML.replace("<i class=\"fa fa-sort\"></i>", sign);
}