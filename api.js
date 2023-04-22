//jquery {using the less traditional way (without npm install & require() ) }
const script1 = document.createElement('script');
script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js';


//document.getElementById('header').innerHTML = $().load('./components/header.html
$(function(){
    $('#header').load('./components/header.html'); 
}); 
$(function(){
    $('#center').load('./components/center.html'); 


})



function loadDoc(){
  const xhttp = new XMLHttpRequest();
   
   xhttp.onload = function(){
       
        const resp = JSON.parse(this.responseText);  
        document.getElementById('root').innerHTML = `
         <h4> HI </h4> 
          
        `; 
    }

    xhttp.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=3s6G8Ik06ynnWE9qbX1m1qIyyUwFF6ABjN69kwdk');
    xhttp.send();


    //server side:

//anime.js {using npm install, and require}
 
}



window.onload = () => loadDoc();

console.log('server.js fully executyed. ')