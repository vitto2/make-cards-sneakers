
 let makecard = () => {   
         
    let count = 0; 

    if(count>=6) {
        alert("Você atingiu a quantidade máxima de cards!");
     } else { 
    let title = document.querySelector('#input-titulo').value;
    let describe = document.querySelector('#input-descricao').value; 
    let image = document.querySelector('#input-url').value; 
    let cardArea = document.querySelector(".card-area");

    const makeCard =  `
    <div class="card"> 
        <img src="${image}" alt="imagem do tênis">
        <h3>${title}<h3>
        <p>${describe}<p>
    </div>
    `;
    
    cardArea.innerHTML+=makeCard;   
    count++; 
    console.log(count);
}   
     }

       