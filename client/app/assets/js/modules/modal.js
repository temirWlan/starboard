export default function toggleModal(triggerSelector, modalSelector, activeClass) {
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const form = modal.querySelector("form");

    if (trigger) {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            modal.classList.toggle(activeClass);
        });
    }

    if (form) {
        form.addEventListener("submit", () => {
            setTimeout(() => modal.classList.remove(activeClass), 3000);
        });
    }

    document.body.addEventListener("click", (e) => {
        if (e.target === modal && modal.classList.contains(activeClass)) {
            modal.classList.remove(activeClass);
        }
    });
}