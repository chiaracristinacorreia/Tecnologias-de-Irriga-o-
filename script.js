// Controle do tamanho da fonte
let tamanhoFonte = 16;
function alterarFonte(acao) {
    const body = document.body;
    if (acao === 'aumentar' && tamanhoFonte < 24) {
        tamanhoFonte += 2;
    } else if (acao === 'diminuir' && tamanhoFonte > 12) {
        tamanhoFonte -= 2;
    }
    body.style.fontSize = tamanhoFonte + 'px';
}

// Controle do Contraste (Fundo escuro/claro)
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

// Leitura em Voz Alta (Utiliza a API nativa do navegador)
function ouvirTexto() {
    // Pega todo o texto do conteúdo principal
    const textoParaLer = document.getElementById('conteudo-principal').innerText;
    
    // Cancela leituras anteriores em andamento
    window.speechSynthesis.cancel();
    
    const fala = new SpeechSynthesisUtterance(textoParaLer);
    fala.lang = 'pt-BR';
    window.speechSynthesis.speak(fala);
}
