function iniciar (){
    const slide = document.getElementById('slide');
    const images = slide.querySelectorAll('img');
    let indice = 0;
    //  Mostrar a primeira imagem
    images[indice].classList.add('ativo');

    //  Criar o texto da legenda
    const texto = document.createElement('p');
    texto.textContent = images[indice].getAttribute('alt');
    //append para inserir depois
    // preppend para inserir antes ou primeiro
    slide.prepend(texto);
    console.log(slide)
    // Intervalo de transição
    setInterval( () =>{
        // Remove .ativo da imagem atual
        images[indice].classList.remove('ativo');
        // atualiza o indice
        indice = (indice + 1) % images.length;
        // Adiciona .ativo na próxima imagem
        images[indice].classList.add('ativo');
        // Atualiza legenda 
        texto.textContent = images[indice].getAttribute('alt');
    }, 3000)

}