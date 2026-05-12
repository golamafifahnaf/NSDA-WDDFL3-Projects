function updateDateTime() {
    const datetime = document.getElementById("datetime");

    if (datetime) {
        const now = new Date();

        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        datetime.innerText =
            now.toLocaleString('en-US', options);
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);