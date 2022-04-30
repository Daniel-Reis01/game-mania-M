let email = document.getElementById("campo email");

function enviarEmail(){
   let emailDigitado = email.Value;
   console.log(emailDigitado)
}

let listaProdutos = [

   {
       titulo: "pc gamer ",
       descriçao:"pc gamer"
   },
   {
       titulo: "pc gamer ",
       descriçao:"pc gamer"
   },
   {
       titulo: "pc gamer ",
       descriçao:"pc gamer"
   },
]


function renderizarprodutos(){
   let espaco = document.getElementById("produtos gamer")

let template = "";

   for (let index = 0; index <listaProdutos.length; index++) {
   const produtos = listaProdutos[index];

         template += ` <div id="produtos gamer" class="produtos">
         <h2>Promoçao</h2> 
         <img src="img/pc.png" alt="foto do pc gamer em promoçao"width="200px">
         <h3>${produtos.titulo}</h3>
         <p>${produtos.titulo}</p>
         </div>
        `
}  

espaco.innerHTML = template;
}


