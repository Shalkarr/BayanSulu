function choko(){
    document.getElementById('demo').innerHTML="Сhocolate from 640 tg"
}
function candi(){
    document.getElementById('qemo').innerHTML="Candies from 720 tg"
}
function cookie(){
    document.getElementById('wemo').innerHTML="Cookies from 960 tg"
}
function nabor(){
    document.getElementById('remo').innerHTML="Sets from 640 tg"
}
function present(){
    document.getElementById('temo').innerHTML="Presents from 720 tg"
}
function fafli(){
    document.getElementById('pemo').innerHTML="Waffles from 960 tg"
}
function marm(){
    document.getElementById('semo').innerHTML="Marmelad from 640 tg"
}
function zefir(){
    document.getElementById('femo').innerHTML="Marshmallow from 720 tg"
}
function iris(){
    document.getElementById('gemo').innerHTML="Toffees from 960 tg"
}

function send(){
    var result=true;
    var a=document.forms.form.name.value;
    var b=document.forms.form.surname.value;
    var c=document.forms.form.number.value;

    // var username_v=/^[a-zA-Z0-9_-]+$/;
    // var number_v=/^[\+]?[7,8]{1}[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    document.getElementById("name").innerHTML="";
    document.getElementById("surname").innerHTML="";
    document.getElementById("number").innerHTML="";

    if(a==null || a==""){
        document.getElementById("name").innerHTML="Email name empty or wrong format";
        result=false;
    }
    if(b==null || b==""){
        document.getElementById("surname").innerHTML="Email surname empty or wrong format";
        result=false;
    }
    if(c==null || c==""){
        document.getElementById("number").innerHTML="Email phone number empty or wrong format";
        result=false;
    }
    else if(result=true)
    {document.getElementById('form').innerHTML="Thank you!!!";}
}
function mOver(obj) {
    obj.style.borderRadius="0";
    obj.style.transition = "0.5s";
  }
  
  function mOut(obj) {
    obj.style.borderRadius="65px";
    obj.style.transition = "0.5s";
  }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
