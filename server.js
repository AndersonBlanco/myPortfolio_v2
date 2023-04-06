//alert("rendering done.")

const script1 = document.createElement('script');
script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js';
const script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.151.3/three.min.js';
//GOD. 

$('#header').load('./components/header.html'); 
$('#center').load('./components/center.html'); 



//THREE JS
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera();





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

}



window.onload = () => loadDoc();
