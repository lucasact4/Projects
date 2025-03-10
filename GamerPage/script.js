document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExample");
    const carouselBtn = document.getElementById("carousel-btn");

    carousel.addEventListener("slid.bs.carousel", function () {
        let activeItem = carousel.querySelector(".carousel-item.active");
        let btnText = "";

        if (activeItem.classList.contains("active")) {
            const index = Array.from(carousel.querySelectorAll(".carousel-item")).indexOf(activeItem);

            // Limpa classes anteriores de animação
            carouselBtn.classList.remove("enter", "exit", "visible");

            // Adiciona animações de entrada e saída
            if (index === 0) {
                btnText = "Minecraft";
            } else if (index === 1) {
                btnText = "GTA 5";
            } else if (index === 2) {
                btnText = "ARK Ascended";
            }

            // Cria uma transição suave de nome
            setTimeout(() => {
                carouselBtn.classList.add("exit");
                setTimeout(() => {
                    carouselBtn.textContent = btnText;
                    carouselBtn.classList.remove("exit");
                    carouselBtn.classList.add("enter");

                    setTimeout(() => {
                        carouselBtn.classList.remove("enter");
                        carouselBtn.classList.add("visible");
                    }, 100);
                }, 100);
            }, 10);
        }
    });
});