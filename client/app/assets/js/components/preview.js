export default function Preview(props) {
    const { title, desc, imgSrc, altImg, meta: { tag, date } } = props;
    const link = `/${title.toLowerCase().replace(" ", "-")}`;

    return `    
        <li class="blog-main__preview preview" data-category="${tag}">
            <a class="preview__link" href="${link}">
                <div class="preview__image-block">
                    <img class="preview__image" src="${imgSrc}" alt="${altImg}">
                </div>
                <div class="preview__text">
                    <div class="preview__meta item__meta">
                        <span class="preview__tag item__tag">${tag}</span>
                        <span class="preview__date item__date">${date}</span>
                    </div>
                    <h3 class="preview__title item__title item__title--second">${title}</h3>
                    <p class="preview__desc item__desc">${desc}</p>
                </div>
            </a>
        </li>
    `
}