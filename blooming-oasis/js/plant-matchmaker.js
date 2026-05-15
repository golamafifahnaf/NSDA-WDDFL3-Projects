function matchPlant() {

    const sunlight = document.getElementById("sunlight").value;
    const care = document.getElementById("care").value;
    const pet = document.getElementById("pet").value;

    const result = document.getElementById("result");

    // Validation
    if (
        !sunlight ||
        !care ||
        !pet
    ) {

        result.classList.remove("d-none", "alert-success");

        result.classList.add("alert-danger");

        result.innerHTML = `
            Please select all preferences first.
        `;

        return;

    }

    let plant = "";
    let description = "";

    // LOW LIGHT
    if (sunlight === "low") {

        if (care === "easy") {

            plant = pet === "yes"
                ? "Spider Plant"
                : "Snake Plant";

            description = pet === "yes"
                ? "A pet-friendly plant that grows well in low light."
                : "A hardy low-maintenance plant perfect for beginners.";

        }

        else if (care === "moderate") {

            plant = pet === "yes"
                ? "Calathea"
                : "Peace Lily";

            description = pet === "yes"
                ? "A decorative pet-safe plant with beautiful foliage."
                : "An elegant indoor plant suitable for shaded rooms.";

        }

        else {

            plant = "Boston Fern";

            description =
                "A lush humidity-loving plant for experienced plant owners.";

        }

    }

    // MEDIUM LIGHT
    else if (sunlight === "medium") {

        if (care === "easy") {

            plant = "Pothos";

            description =
                "A versatile indoor plant that adapts well to medium light.";

        }

        else if (care === "moderate") {

            plant = "Monstera Deliciosa";

            description =
                "A tropical plant known for its large decorative leaves.";

        }

        else {

            plant = "Alocasia";

            description =
                "A bold tropical plant requiring attentive care.";

        }

    }

    // HIGH LIGHT
    else {

        if (care === "easy") {

            plant = "Succulent";

            description =
                "A drought-tolerant plant that thrives in bright sunlight.";

        }

        else if (care === "moderate") {

            plant = "Rubber Plant";

            description =
                "A stylish indoor plant that enjoys bright indirect light.";

        }

        else {

            plant = "Fiddle Leaf Fig";

            description =
                "A statement plant best suited for experienced plant owners.";

        }

    }

    result.classList.remove(
        "d-none",
        "alert-danger"
    );

    result.classList.add("alert-success");

    result.innerHTML = `
        <h5 class="fw-bold mb-2">
            Recommended Plant: ${plant}
        </h5>

        <p class="mb-0">
            ${description}
        </p>
    `;

}