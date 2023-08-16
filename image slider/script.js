var counter = 1;
setInterval(function(){

    document.getElementById('radio' + counter).checked = true;
    counter = counter + 1;
//  counter++;
     if(counter>3){
        counter = 1;
     }

},3000)