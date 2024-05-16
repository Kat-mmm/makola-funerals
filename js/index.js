document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentNode;
            const accordionContent = accordionItem.querySelector(".accordion-content");
            const icon = this.querySelector("span i");

            if (accordionContent.style.display === "block") {
                accordionContent.style.display = "none";
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            } else {
                accordionContent.style.display = "block";
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            }
        });
    });
});
