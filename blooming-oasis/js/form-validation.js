const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const plant = document.getElementById("plant");
    const file = document.getElementById("file");
    const experience = document.getElementById("experience");

    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png"
    ];

    if (
        email.value.trim() === "" ||
        name.value.trim() === "" ||
        plant.value.trim() === "" ||
        experience.value.trim() === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }

    const emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(emailPattern)) {

        alert("Please enter a valid email address.");

        return;

    }

    for (let i = 0; i < file.files.length; i++) {

        if (!allowedTypes.includes(file.files[i].type)) {

            alert("Only JPG, JPEG and PNG files are allowed.");

            return;

        }

    }

    alert("Thanks for sharing your experience with us!");

});