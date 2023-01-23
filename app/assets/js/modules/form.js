export default function sendForm(formSelector) {
    const forms = document.querySelectorAll(formSelector);
    const formTooltip = document.createElement("p");
    
    formTooltip.classList.add("subtitle--second", "form__tooltip");
    
    if (forms.length) {
        forms.forEach(form => {
            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                console.log(formSelector)
                const formData = new FormData(form);
                // const response = await fetch("localhost:8080", {
                //     method: "POST",
                //     body: formData
                // });
        
                // const result = response.json();
                
                for (const [key, value] of formData) {
                    console.log(key, value)
                }
    
                formTooltip.textContent = "Form sent";
                
                form.reset();
                form.appendChild(formTooltip);
    
                setTimeout(() => {
                    form.removeChild(formTooltip);
                }, 5000);
            });
        })
    }
}