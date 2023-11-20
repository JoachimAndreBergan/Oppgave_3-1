const slideshow = document.querySelector(".slideshow");

const slides = slideshow.querySelectorAll (".slideshow_slide");

const controls = slideshow.querySelectorAll(".slideshow_control_button");


const showMeASlide = () =>{
    let index = 0;
    const totalSlides = slides.length;
    const lastIndex = slides.length - 1;


slides.forEach(slide =>{
    slide.classList.remove("slideshow_slide_visible");
});

slides[0].classList.add("slideshow_slide_visible");

}

let index = 0;
    const totalSlides = slides.length;
    const lastIndex = slides.length - 1;

const goToPreviousSlide =() =>{
    slides.forEach(slide =>{
        slide.classList.remove("slideshow_slide_visible");
    });
    
    slides[index].classList.add("slideshow_slide_visible");
};

const goToNextSlide =() =>{
    if (index < lastIndex){
        index = index + 1;
    }
    else{
        index = 0;
    }
    
    slides.forEach(slide =>{
        slide.classList.remove("slideshow_slide_visible");
    });
    
    slides[index].classList.add("slideshow_slide_visible")
};


const changeSlide = (event) => {
    const button = event.currentTarget;

    showMeASlide();

    if (button.dataset.direction === 'previous') {
        goToPreviousSlide();
    }

    if (button.dataset.direction === 'next' ){
        goToNextSlide();
    }

}

controls.forEach (button => {
    button.addEventListener("click", changeSlide );
})