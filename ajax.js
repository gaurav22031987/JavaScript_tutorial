//https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_get
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "demo_get.asp", true); // last parameter true and false
    //async: true (asynchronous) or false (synchronous)

    xhttp.send();
  }
//<button type="button" onclick="loadDoc()">Request data</button>