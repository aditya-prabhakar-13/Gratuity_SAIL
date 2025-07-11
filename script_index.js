document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector("input[name='name']");
    if (nameInput && document.querySelector("#welcome-go")) {
        document.querySelector("#welcome-go").addEventListener("click", () => {
            if (nameInput.value.trim() !== "") {
                window.location.href = "prof-portal.html";
            } else {
                alert("Please enter your name");
            }
        });
    }
})