export default function toggleMenu(triggerSelector, menuSelector, triggerActiveClass, menuActiveClass) {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);

    if (trigger) {
        trigger.addEventListener("click", () => {
            trigger.classList.toggle(triggerActiveClass);
    
            if (trigger.classList.contains(triggerActiveClass)) {
                menu.classList.add(menuActiveClass);
            } else {
                menu.classList.remove(menuActiveClass)
            }
        });
    }
}