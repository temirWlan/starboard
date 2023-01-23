export default function filterByCategory(triggerSelector, itemSelector, triggerActiveClass) {
    const triggers = document.querySelectorAll(triggerSelector);
    const items = document.querySelectorAll(itemSelector);
    let activeCategories = [];

    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            const target = e.target;
            const category = target.dataset.category;

            target.classList.toggle(triggerActiveClass);

            if (target.classList.contains(triggerActiveClass) && !activeCategories.includes(category)) {
                activeCategories.push(category);
            } else {
                activeCategories = activeCategories.filter(c => c !== category);
            }

            items.forEach(item => {
                if (!activeCategories.includes(item.dataset.category) && !activeCategories.includes("All") && activeCategories.length) {
                    item.style.display = "none";
                } else {
                    item.style.display = "flex";
                }
            })

            console.log(activeCategories)
        });
    });
}