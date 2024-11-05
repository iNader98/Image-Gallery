let body = document.querySelector("body"),
   lightBox = document.querySelector(".lightbox"),
   img = document.querySelectorAll(".gimg"),
   showImg = lightBox.querySelector(".showimg img"),
   close = lightBox.querySelector(".close");

   for(let image of img) {
    image.addEventListener("click", ()=> {
        lightBox.style.display = "block";
        showImg.src = image.src;
        body.style.overflow = "hidden";

        close.addEventListener ("click", ()=> {
            lightBox.style.display = "none";
            body.style.overflow = "visible";
        });
    });
   }