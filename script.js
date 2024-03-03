let menuVisible = false;
/*alert("Olá! Gostaria de expressar minha sincera gratidão por você visitar meu site pessoal e conferir meu portfólio. Sua presença aqui significa muito para mim e estou muito feliz em poder compartilhar meu trabalho com você.\n Espero que meu portfólio possa inspirá-lo e mostrar um pouco mais sobre quem eu sou e o que posso fazer. Agradeço novamente por dedicar seu tempo para conhecer meu trabalho e espero que você tenha uma experiência agradável ao navegar pelo meu site.\n Obrigado!");*/

function MostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else {
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function selecionar (){
document.getElementById("nav").classList="";
menuVisible=false;
}

window.onscroll = function(){
    efeitoHabilidades();
}

function efeitoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicação");
        habilidades[6].classList.add("trabalho");
        habilidades[7].classList.add("criatividade");
        habilidades[8].classList.add("dedicação");
        habilidades[9].classList.add("projeto");s



    }
}

function jogos () {
    window.open( "pages/jogos.html","blank")
}

function musica () {
    window.open( "pages/musica.html","_blank")
}
function viajar () {
    window.open ("pages/viajar.html","_blank")
}
function auto () {
    window.open ("pages/auto.html","_blank")
}

function fotos () {
    window.open ("pages/fotos.html","_blank")
}

function cv()
{
    window.open ("https://www.dropbox.com/scl/fi/13asn3en5f8pbll6i8ky4/Curriculo-Eliel-Costa.pdf?rlkey=k7vuwhrlmge3okeczek1zj5xd&dl=0","_blank")
 }

 function calcjs()
{
    window.open ("https://elielroberto1.github.io/Calculadora/","_blank")
 }
 function ticTacToe()
 {
     window.open ("https://elielroberto1.github.io/JogoDaVelha/","_blank")
  }

  function seal()
 {
     window.open ("https://elielroberto1.github.io/SealSite/","_blank")
  }


  function smart(){
   window.open( "https://elielroberto1.github.io/SmartConectaFrontEnd/","_blank")
  }


  function projetoYT(){
    window.open( "https://elielroberto1.github.io/FrontEndYoutube/","_blank")
   }


   function bolosDaTiaBa(){
    window.open ("https://www.dropbox.com/scl/fi/58rb03d84xkis7yanbdax/BolosTiaBa-FooDcommerce.mp4?rlkey=h1zm5d9mqgdas7i8v8tip0aci&dl=0","_blank")
   }


  function certificadoUSCS() {
    window.open ("assets/img/CertificadoUSCS.jpeg","_blank")
  }
  function certificadoONEBITCODE() {
    window.open ("https://www.dropbox.com/scl/fi/rf2o1rqvx9s04wrvue26a/onebit.pdf?rlkey=4mbznqvglohgco76pqtgf6i6u&dl=0","_blank")
  }
  function certificadoISBET() {
    window.open ("assets/img/CertificadoIsbet.jpeg","_blank")
  }
  function certificadoGIGABYTE() {
    window.open ("assets/img/CertificadoGiga.jpeg","_blank")
  }
  function certificadoFACEBOOK() {
    window.open ("assets/img/CertificadoEstacao.png","_blank")
  }
  function certificadoSamurai() {
    window.open ("https://www.dropbox.com/scl/fi/8rejfr6aqdcas2v82qufg/DevSamurai.pdf?rlkey=9x9nfsxl426qhhe4atqqpbke8&dl=0","_blank")
  }
//fotos

let count =1;
document.getElementById('radio1');checked = true;

setInterval( function() {
nextImage();
},4000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById('radio'+count).checked = true;


}
