import gallery from "./gallery-items.js";

const galleryListRef = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryCardMarkup(gallery);

galleryListRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryListRef.addEventListener("click", onCardContainerClick);

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

function onCardContainerClick(event) {
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  removeActiveClassTeg();

  // const imageEl = event.target;
  // const parentImageCard = imageEl.closest(".gallery__item");
  // parentImageCard.classList.add("is-active");
}

function removeActiveClassTeg() {
  const currentActiveCard = document.querySelector(".lightbox.is-active");

  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }

  currentActiveCard.classList.add("is-active");
}
