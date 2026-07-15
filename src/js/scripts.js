// Menu ACTIVE status indicator
navIndicator();
function navIndicator() {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".lg-scrn-menu a");

    const observerOptions = {
    root: null,
    threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const id = entry.target.id;

        // quitar active de todos
        menuLinks.forEach(link => link.classList.remove("active"));

        // activar el link correspondiente
        const activeLink = document.querySelector(
            `.lg-scrn-menu a[href="#${id}"]`
        );

        if (activeLink) {
            activeLink.classList.add("active");
        }
        }
    });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// Overlay funtionality
overlaySwitch();
function overlaySwitch(){
    let overlaySwitch = document.getElementsByClassName("overlaySwitch");
    for (let i = 0; i < overlaySwitch.length; i++) {
        overlaySwitch[i].addEventListener("click", function(){
            const overlayContactForm = document.getElementById("overlay-contactForm");
            overlayContactForm.classList.toggle("hidden");
                if (overlayContactForm.classList.contains("hidden")) {
                    removeBodyScrolling();
                }else{
                    addBodyScrolling();
                }
        })
    }    
};
function removeBodyScrolling() {
    document.body.classList.remove('no-scroll');
}
function addBodyScrolling() {
    document.body.classList.add('no-scroll');
}