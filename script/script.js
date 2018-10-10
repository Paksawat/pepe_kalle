// News collapse  //

var coll = document.getElementsByClassName("collapsible");//Sætter variable = classen "collapsible"//
var i;                                                    //Sætter en variable i//


//Statement 1 is executed (one time) before the execution of the code block.
//Statement 2 defines the condition for executing the code block.
//Statement 3 is executed (every time) after the code block has been executed.

for (i = 0; i < coll.length; i++) {                       //angiver en 'for' (loop) lykke, sætter i til 0, sætter conditionen at i skal være større end  // 
  coll[i].addEventListener("click", function() {          //coll variable med værdien 'i', lytter på clicks, køre vores funktion//
                   
    var p_show = this.nextElementSibling;                 // sætter variable til værende det barn, der kommer efter coll //
    if (p_show.style.display === "block") {               // Hvis display er block -> //
      p_show.style.display = "none";                      // så sæt display til none //
    } else {                                              // ellers //
      p_show.style.display = "block";                     // sæt display til block  //
    }
  });
}

// navigation //
