const sizeButtons = document.querySelectorAll(".plant-size-btn");

sizeButtons.forEach(button => {

    button.addEventListener("click", function () {

        const parent = this.parentElement;

        parent.querySelectorAll(".plant-size-btn").forEach(btn => {
            btn.classList.remove("btn-success");
            btn.classList.add("btn-outline-success");
        });

        this.classList.remove("btn-outline-success");
        this.classList.add("btn-success");

    });

});