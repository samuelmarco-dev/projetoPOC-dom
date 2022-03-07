function apagarAnotacao(elemento){
    const itemParaApagar = elemento.parentNode;
    console.log(itemParaApagar);

    itemParaApagar.remove();
    setTimeout(()=>{
        alert('Esta anotação foi removida');
    }, 350)
}

function removerTodos(){
    const anotacaoDoQuadro = [...document.querySelectorAll('ul div')];
    console.log(anotacaoDoQuadro);
    anotacaoDoQuadro.forEach((removerElemento)=>{
        removerElemento.remove();
    })
    setTimeout(()=>{
        alert('Todas as anotações foram removidas');
    }, 500)
}

function adicionarAnotacao(){
    const dadosAnotacao = document.querySelector('.entrada-dados input');
    console.log(dadosAnotacao);
    verificarDadosInput(dadosAnotacao);
    dadosAnotacao.value = "";
}

function verificarDadosInput(dados){
    if(dados.value === "" || dados.value === null || dados.value === undefined){
        alert('Não é possível adiconar uma anotação sem dados ("vazia"). Tente novamente!');
    }else{
        adionarPensamentoNoQuadro(dados.value);
        alert('Sua anotação foi adicionada ao quadro abaixo!');
    }
}

function adionarPensamentoNoQuadro(dadosParaAdicionar){
    const listaAnotacao = document.querySelector('main ul');
    listaAnotacao.innerHTML += `
    <div>
        <li>${dadosParaAdicionar}</li>
        <ion-icon name="trash-outline" onclick="apagarAnotacao(this)"></ion-icon>
    </div>
    `;
}

function adicionarElemento() {
    const novoParagrafo = document.createElement('p');
    const texto = document.createTextNode("Conteúdo do método Create Element");
    novoParagrafo.appendChild(texto);

    const body = document.querySelector('main');
    body.appendChild(novoParagrafo);
}