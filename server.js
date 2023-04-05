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
alert("rendering done.")