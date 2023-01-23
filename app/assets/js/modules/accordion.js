import { toggleClass } from "./toggle";

export default function toggleAccordion(triggerSelector, itemSelector, triggerActiveClass, itemActiveClass) {
    const triggers = document.querySelectorAll(triggerSelector);
    const items = document.querySelectorAll(itemSelector);

    if (triggers) {
        triggers.forEach((trigger, idx) => {
            trigger.addEventListener("click", () => {
                trigger.classList.toggle(triggerActiveClass);

                if (trigger.classList.contains(triggerActiveClass)) {
                    items[idx].classList.add(itemActiveClass);
                } else {
                    items[idx].classList.remove(itemActiveClass);
                }
            });
        });
    }
}