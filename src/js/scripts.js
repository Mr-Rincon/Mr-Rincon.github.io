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
overlaySwitch("emailOverlaySwitch", "overlay-contactForm");
function overlaySwitch(overlayActivator, overlayContentId){
    let overlaySwitch = document.getElementsByClassName(overlayActivator);
    
    for (let i = 0; i < overlaySwitch.length; i++) {
        overlaySwitch[i].addEventListener("click", function(){
            const overlayContent = document.getElementById(overlayContentId);
            overlayContent.classList.toggle("hidden");
                if (overlayContent.classList.contains("hidden")) {
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

// Toggle Action
aiToMeToggle();
function aiToMeToggle() {
    const wrapper = document.querySelector(".ai-me-wrapper");
    const switchButton = document.querySelector("#toggl");

    switchButton.addEventListener("click", () => {

        const isMeActive = wrapper.classList.toggle("is-me-active");

        const activeView = isMeActive
            ? wrapper.querySelector(".me-view")
            : wrapper.querySelector(".ai-view");

        wrapper.style.height = `${activeView.scrollHeight}px`;
    });
}
