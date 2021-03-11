const ol = document.body.querySelector('ol');
    
    for (let i = 1; i<=11; i++) {
        let li = document.createElement('li');
        li.textContent = `Seweryn ${i}`;
        ol.appendChild(li);
    }
  
const tabela = document.body.querySelectorAll('li');
    for (let i = 1; i < tabela.length ; i = i+2) {
        tabela[i].style.background="yellow";
        tabela[i].style.color ="red" ;       
    }