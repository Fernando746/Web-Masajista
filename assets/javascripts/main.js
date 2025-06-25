// 1. Menu y sticky

(function () {
    let menu = document.querySelector(".main-header");
    let containerMenu = document.querySelector(".main-navegador");

    window.addEventListener("scroll", function () {
        let scroll = window.scrollY;
        let width = window.innerWidth;

        if (width < 714) {
            containerMenu.style.borderRadius = "0px";
            containerMenu.style.transform = "translateY(0px)";
            containerMenu.style.transition = "all 0.6s ease-in-out";
            containerMenu.style.gridTemplateColumns = "auto auto";
            containerMenu.style.placeContent = "space-between";

            if (scroll >= 216) {
                menu.style.position = "sticky";
                menu.style.top = "0";
                menu.style.transform = "translateX(0)";
                containerMenu.style.setProperty("max-width", "100%", "important");
                containerMenu.style.borderRadius = "0";
                containerMenu.style.transform = "translateY(0)";
                containerMenu.style.transition = "all 0s ease-in-out";
            }
        } 
        else {
            
        if (scroll >= 87) {
            menu.style.position = "sticky";
            menu.style.top = "0";
            menu.style.transform = "translateX(0)";
            containerMenu.style.setProperty("max-width", "100%", "important");
            containerMenu.style.borderRadius = "0";
            containerMenu.style.transform = "translateY(0)";
            containerMenu.style.transition = "all 0s ease-in-out";
        } else {
            menu.style.position = "absolute";
            menu.style.transform = "translateX(-50%)";
            menu.style.removeProperty("top");
            containerMenu.style.borderRadius = "60px";
            containerMenu.style.transform = "translateY(-11px)";
        }
    }
    });
})();

// Button the menu

document.addEventListener("DOMContentLoaded", function () {
    let butonmenu = document.querySelectorAll(".main-menu .menu-item a");
    const page = window.location.pathname.split("/").pop();

    butonmenu.forEach((link) => {
        let href = link.getAttribute("href");

        if (href === page) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
    }
    });
});

//Menu lateral

document.addEventListener("DOMContentLoaded", function () {
    let openbtn = document.querySelector(".button-menulateral");
    let closebtn = document.querySelector(".close-btn");
    let menulateral = document.querySelector(".menulateral");
    let overlay = document.querySelector(".overlay-menulateral");

    openbtn.addEventListener("click", function () {
        menulateral.classList.add("show");
        overlay.classList.add("show");
    });

    closebtn.addEventListener("click", function () {
        menulateral.classList.remove("show");
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", function () {
        menulateral.classList.remove("show");
        overlay.classList.remove("show");
    });
});

// 2.   Slider

document.addEventListener("DOMContentLoaded", function () {
    let btnleft = document.querySelector(".slider-arrow.prev");
    let btnright = document.querySelector(".slider-arrow.next");
    let slider = document.querySelector(".slider-wraper");
    let slideritem = document.querySelectorAll(".slider-item");

    let sum = 0;
    const size = 100 / slideritem.length;
    const max = (slideritem.length - 1) * size;

    slideritem.forEach((item) => {
        item.style.width = `${size}%`;
    });

    slider.style.width = `${100 * slideritem.length}%`;

    btnright.addEventListener("click", function () {
        if (sum < max) {
            sum += size;
        } else {
            sum = 0;
        }
        slider.style.transform = `translateX(-${sum}%)`;
    });
    btnleft.addEventListener("click", function () {
        if (sum > 0) {
            sum -= size;
        } else {
            sum = max;
    }
    console.log("Left ←", sum);
    slider.style.transform = `translateX(-${sum}%)`;
    });
});
