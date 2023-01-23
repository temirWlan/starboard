export default function SidebarPreview(props) {
    const { title, desc, meta: { tag, date } } = props;
    const link = `/${title.toLowerCase().replace(" ", "-")}`;

    return `
        <li class="blog-main__sidebar-preview sidebar-preview">
            <a class="sidebar-preview__link" href="${link}">
                <div class="sidebar-preview__meta item__meta">
                    <span class="sidebar-preview__tag item__tag">${tag}</span>
                    <span class="sidebar-preview__date item__date">${date}</span>
                </div>
                <h3 class="sidebar-preview__title item__title item__title--second">${title}</h3>
                <p class="sidebar-preview__desc item__desc">${desc}</p>
            </a>
        </li>
    `
}