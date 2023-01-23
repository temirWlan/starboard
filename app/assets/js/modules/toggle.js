export function toggleClass(triggerSelector, itemSelector, itemActiveClass) {
    const triggers = document.querySelectorAll(triggerSelector);
    const item = document.querySelector(itemSelector);
    console.log(triggers, item)

    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            console.log(e.target)
            e.preventDefault();

            item.classList.toggle(itemActiveClass);
        });
    });
}