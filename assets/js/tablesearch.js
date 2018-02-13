function tablesearch() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable2");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  var display = true;
  var col = document.getElementById("selectInput").value;
  if (col == -1) {
    for (i = 0; i < tr.length; i++) {
	  for (j = 0;j <= 9; j++) {
        td = tr[i].getElementsByTagName("td")[j];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
		    display = true;
		    break;
          } else {
            display = false;
          }
        }
	  }
	  if (display) {
	    tr[i].style.display = "";
	  } else {
        tr[i].style.display = "none";	
	  }
    }
  } else {
	for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[col];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
	      tr[i].style.display = "none";	
        }
      }
	}
  }
}