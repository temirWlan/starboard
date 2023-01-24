export default function ArticlesListItem(props) {
    const { title, desc, imgSrc, altImg, meta: { tag, date } } = props;
    const link = `/${title.toLowerCase().replace(" ", "-")}`;

    return `
        <li class="articles__list-item">
            <a class="articles__list-item-link" href="${link}">
                <div class="articles__list-item-image-block">
                    <img class="articles__list-item-image" src="${imgSrc}" alt="${altImg}">
                </div>
                <div class="articles__list-item-text">
                    <div class="articles__list-item-meta item__meta">
                        <span class="articles__list-item-tag item__tag">${tag}</span>
                        <span class="articles__list-item-date item__date">${date}</span>
                    </div>
                    <h5 class="articles__list-item-title">${title}</h5>
                    <p class="articles__list-item-desc item__desc">${desc}</p>
                </div>
            </a>
        </li>
    `
}