export default function searchArticle(inputSelector, btnSelector, itemSelector, itemTitleSelector) {
    const input = document.querySelector(inputSelector);
    const btn = document.querySelector(btnSelector);
    const items = document.querySelectorAll(itemSelector);

    if (btn) {
        btn.addEventListener("click", () => {
            items.forEach(item => {
                const title = item.querySelector(itemTitleSelector).textContent;
    
                if (title.toLowerCase().includes(input.value.toLowerCase())) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    if (input) {
        input.addEventListener("input", () => {
            if (!input.value.length) {
                items.forEach(item => {
                    item.style.display = "flex";
                })
            }
        });
    }
}