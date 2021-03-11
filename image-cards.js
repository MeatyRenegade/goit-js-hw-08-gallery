import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryCardMarkup(gallery);

galleryListRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryCardMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join("");
}
