const galleryListRef = document.querySelector(".js-gallery");
const lightBoxRef = document.querySelector(".js-lightbox");
const lightBoxImgRef = document.querySelector(".lightbox__image");

galleryListRef.addEventListener("click", onImgBoxClick);
lightBoxRef.addEventListener("click", onCloseBtnClick);
lightBoxRef.addEventListener("click", onLightBoxOverlayClick);
window.addEventListener("keydown", onEscKeyPress);

function setAttributeOnImg(attribute, value) {
  lightBoxImgRef.setAttribute(attribute, value);
}

function onImgBoxClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  event.preventDefault();

  lightBoxRef.classList.add("is-open");

  setAttributeOnImg("src", event.target.dataset.source);
  setAttributeOnImg("alt", event.target.getAttribute("alt"));
}

function cleanAttributes() {
  lightBoxRef.classList.remove("is-open");

  setAttributeOnImg("src", "");
  setAttributeOnImg("alt", "");
}

function onCloseBtnClick(event) {
  if (!event.target.classList.contains("lightbox__button")) {
    return;
  }

  cleanAttributes();
}

function onLightBoxOverlayClick(event) {
  if (!event.target.classList.contains("lightbox__overlay")) {
    return;
  }

  cleanAttributes();
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    cleanAttributes();
  }
}
