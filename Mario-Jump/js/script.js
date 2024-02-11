//Declara todas as variáveis

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const btnReiniciar = document.getElementById('btn-atualizar');
const pontuacaoElement = document.getElementById('pontuacao');

let pontuacao;

//Declara a variavel que fica responsável por adiciona ou remover a class do mario

const jump = ()=>{
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
}

// Função para iniciar o jogo
const iniciarJogo = () => {
    pontuacao = 0;
    pontuacaoElement.textContent = 'Pontuação: 0';
};

//Roda o loop do jogo

const loop = setInterval(()=>{

    //declara a variavel para pegar a posicao esquerda do pipe

    const pipePosition = pipe.offsetLeft;
    const pipePositionRight = pipe.offsetRight;

    //declara a variavel para pegar a posicao do mario

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

    //verifica se o mario nao bateu no pipe

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        //executa se todas as condiçoes forem atendidas

        //estiliza o pipe com essa informacoes
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`; 


        //estiliza o mario com essa informacoes
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        //estiliza as nuvens com essa informacoes
        clouds.style.animation = 'none'; 

        //estiliza o botao reiniciar com essa informacoes
        btnReiniciar.style.display = 'block';


        clearInterval(loop)

    }else if (pipePosition >= 10) {
        // Incrementa a pontuação quando o Mario passa pelo pipe
        pontuacao += 1;
        pontuacaoElement.textContent = `Pontuação: ${pontuacao}`;
    }
}, 10);

//Reiniciar a página assim que clicado

btnReiniciar.addEventListener('click', ()=>{
    location.reload()
});

//adiciona um evento chamando jump

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);

//Inicia o jogo
iniciarJogo();