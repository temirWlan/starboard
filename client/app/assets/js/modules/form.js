export default function sendForm(formSelector, url) {
    const form = document.querySelector(formSelector);
    const formTooltip = document.createElement("p");
    
    formTooltip.classList.add("subtitle--second", "form__tooltip");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries())


            fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    formTooltip.textContent = res.message;
                    form.appendChild(formTooltip);
    
                    setTimeout(() => {
                        form.removeChild(formTooltip);
                    }, 3000);
                }

                if (res.token) {
                    localStorage.setItem("token", res.token);
                    document.location.href = "/";
                }
            })
            .catch(err => console.log(err))

            
            form.reset();
        });
    }
}