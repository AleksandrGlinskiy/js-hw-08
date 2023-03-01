// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
/* 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
 */
console.log("Hello");
const galleryContainer = document.querySelector(".gallery");

const cardsMarkup = createGalleryCardsMarkup(galleryItems);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
        </a>
    </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
console.log(galleryItems);

/* 2 Реализация делегирования на div.gallery и получение url большого изображения.
 */

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  /*   window.addEventListener('keydown', onEscPress);
   */ if (e.target.className !== "gallery__image") {
    return;
  }
  console.log(e.target.dataset);

  /*    4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
    5 Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с 
        изображением из примеров библиотеки basicLightbox. */

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  instance.show();
}

console.log(galleryItems);
