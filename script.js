    function splashScreen() {
setTimeout(loaded, 2200);
    }
    function loaded (){
        var load= document.getElementById('globe');
        load.removeAttribute("id");
        load.removeAttribute("class");
        setTimeout(loaded2, 200);
    }
  function loaded2(){
    let x = document.getElementById('splash');
    x.style.display= "none";
  }

