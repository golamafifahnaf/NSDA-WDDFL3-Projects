const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const msg = document.getElementById("msg").value.trim();

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function validatePhone(phone) {
            return /^[0-9]{11}$/.test(phone);
        }

        let errors = [];

        if (name === "") errors.push("Name is required!");
        if (!validateEmail(email)) errors.push("Enter a valid Email!");
        if (!validatePhone(phone)) errors.push("Enter a valid Phone!");
        if (address === "") errors.push("Subject is required!");
        if (msg === "") errors.push("Message is required!");
        if (msg.length < 10) errors.push("Message must be atleast 10 characters!");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        alert("Message Sent Successfully!");
    });
}