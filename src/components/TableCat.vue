<template>
      <div id="tableDiv">
        <table border="1px" align="center">
          <tr>
            <th>Item</th>
            <th>Nome do Gato</th>
            <th>Imagem</th>
          </tr>
          <tr>
            <th>1</th>
            <td>Sphynx</td>
            <td id="imagem1"><img src="https://t1.ea.ltmcdn.com/pt/posts/4/2/3/sphynx_21324_1_600.webp"></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Peterbald</td>
            <td id="imagem2"><img src="https://t2.ea.ltmcdn.com/pt/posts/4/2/3/peterbald_21324_7_600.webp"></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Munchkin</td>
            <td id="imagem3"><img src="https://t1.ea.ltmcdn.com/pt/posts/4/2/3/munchkin_21324_8_600.webp"></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cornish Rex</td>
            <td id="imagem4"><img src="https://t2.ea.ltmcdn.com/pt/posts/4/2/3/cornish_rex_21324_9_600.webp"></td>
          </tr>
        </table>
      </div>
  </template>
<script>
  export default {
    name: 'TableCat'
  }
</script>
<style scoped>
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
img {
    border-radius: 10px;
    width: 40%;
    height: auto;
    margin: 5px;
}
@media screen and (max-width: 850px) {
    tabela{
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
    }
}
</style>