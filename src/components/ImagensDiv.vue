<template>
      <div id="imagensDiv">
      <div id="div1">
        <h1>CATS!</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias rem ipsam consequatur nostrum. Est architecto ab.</h4>
        <img src="../assets/fatCat.png" id="imggrande" alt="ERRO!">
      </div>
  
      <div id="div2">
        <img src="../assets/faceCat.webp" alt="ERRO!">
        <img src="../assets/warCat.jpg" alt="ERRO!">
      </div>
      <div id="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hijP54QlSVk?si=7gyYKLKZN1hZ3FNA"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  </template>
<script>
  export default {
    name: 'ImagensDiv'
  }
</script>
  <style scoped>
/*body {
    margin: 50px;
    padding: 0;
}
@keyframes bg {
    0% {
      background: rgba(25, 220, 234, 0);
    }
    100% {
      background-image: #000000;
    }
  }
tabela{
    display: flex;
    justify-content: center;
    align-items: center;
}
table{
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    margin-top: 50px;
}
table td{
    text-align: center;
}
#imagem1{
    background-image: url(https://t1.ea.ltmcdn.com/pt/posts/4/2/3/sphynx_21324_1_600.webp);
}
#imagem2{
    background-image: url(https://t2.ea.ltmcdn.com/pt/posts/4/2/3/peterbald_21324_7_600.webp);
}
#imagem3{
    background-image: url(https://t1.ea.ltmcdn.com/pt/posts/4/2/3/munchkin_21324_8_600.webp);
}
#imagem4{
    background-image: url(https://t2.ea.ltmcdn.com/pt/posts/4/2/3/cornish_rex_21324_9_600.webp);
}
*/
#imggrande {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: auto;
    border-radius: 5px;
    transition: 1s;
}
#imggrande:hover{
  transition: 1s;
  width: 40%;
}

#video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

#video iframe {
    width: 80%;
    height: 455px;
    border-radius: 20px;
    transition-duration: 1s;
}

#div1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

#div1 h4 {
    font-size: xx-large;
    transform: scale(100%);
    transition-duration: 1s;
}

#div1 h1 {
    transform: scale(190%);
    transition-duration: 1s;
}

#div2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

#div2 img {
  border-radius: 5px;
  width: 20%;
  margin: 5px;
  transition: 1s;
}
#div2 img:hover{
  transition: 1s;
  width: 30%;
}

@media screen and (max-width: 850px) {
    /*tabela{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    table{
        size: 120%;
        margin-left: auto;
        margin-right: auto;
        border-collapse: collapse;
        margin-top: 50px;
    }
    table td{
        text-align: center;
    }
    #imagem1{
        background-image: none;
        animation: bg 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite reverse both;
    }
    #imagem2{
        background-image: none;
    }
    #imagem3{
        background-image: none;
    }
    #imagem4{
        background-image: none;
    }*/
    #imggrande{
        width: 30%;
    }
    #imggrande:hover{
      width: 40%;
    }
    #div2 {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    #div2 img {
        width: 30%;
        height: auto;
    }
    #div2 img:hover {
        width: 40%;
    }

    #div1 h4 {
        transform: scale(70%);
        transition: 1s;
    }

    #div1 h1 {
        transform: scale(150%);
        transition-duration: 1s;
        margin-bottom: 0;
    }

    #video {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;   
    }

    #video iframe {
        width: 60%;
        height: auto;
        margin-top: -15px;
    }

    #div1 {
        margin-bottom: 0px;
    }
}

@media (max-width: 400px) {
    #imggrande{
      width: 50%;
    }
    #imggrande:hover{
      width: 60%;
    }
    #div2 img {
        width: 50%;
        height: auto;
    }
    #div2 img:hover {
        width: 60%;
        height: auto;
    }

    #div1 h4 {
        display: none;
    }

    #div1 h1 {
        transform: scale(150%);
        transition-duration: 1s;
        margin-bottom: 50px;
    }
    #video {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    #video iframe {
        width: 50%;
        height: auto;
        margin-top: -15px;
    }
}
</style>