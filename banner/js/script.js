let time =2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;

    function nextImage(){
        images[currentImageIndex].classList.remove("selected")

        currentImageIndex++  // (4)
        if (currentImageIndex >= max)
            currentImageIndex = 0;


        // adicione na image[0] posição 0 a classe "selected"
        images[currentImageIndex].classList.add("selected")
  

    }

    function start(){
        // intervalo de time = 2000 (2segundos) e roda a função nextImage
        setInterval( () =>{
            nextImage()
        },time)

    }

    window.addEventListener("load", start)


    // w3school eventos, ver as funções de intereção
    // mousemove

