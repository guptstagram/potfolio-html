document.addEventListener("DOMContentLoaded", function(){

    const h1s=document.querySelectorAll("h1");

    // --------------------- PRINTING H1 TAGS ONE BY ONE AFTER 500ms ---------------------
    for(let i=0;i<h1s.length;i++){
        setTimeout(()=>{
            h1s[i].style.display="flex";
            // console.log(h1s[i]);
        }, 500*i);
    }
    // --------------------- PRINTING H1 TAGS ONE BY ONE AFTER 500ms ---------------------

    // --------------------- HIDING H1 TAGS ONE BY ONE AFTER 100ms ---------------------
    for(let i=0;i<h1s.length;i++){
        setTimeout(()=>{
            h1s[h1s.length-i-1].style.display="none";
            // console.log(h1s[i]);
        }, 500*h1s.length + 100*i);
    }
    // --------------------- HIDING H1 TAGS ONE BY ONE AFTER 500ms ---------------------

    setTimeout(()=>{
        document.querySelector("h2").style.display="flex";
    },600*h1s.length);
    
    setTimeout(()=>{
        window.location.replace("./homepage.html");
    },600*h1s.length+500);

});
