import imageGalleryStyles from "./ImageGallery.module.css";

const images = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-8.jpg",
  "/gallery/gallery-9.jpg",
  "/gallery/gallery-10.jpg",
  "/gallery/gallery-11.jpg",
  "/gallery/gallery-12.jpg",
  "/gallery/gallery-13.jpg",
  "/gallery/gallery-14.jpg",
  // "/gallery/gallery-15.jpg",
  "/gallery/gallery-16.jpg",
  "/gallery/gallery-17.jpg",
  "/gallery/gallery-18.jpg",
  "/gallery/gallery-19.jpg",
  "/gallery/gallery-20.jpg",
  "/gallery/gallery-21.jpg",
  "/gallery/gallery-22.jpg",
  "/gallery/gallery-23.jpg",
  "/gallery/gallery-24.jpg",
  "/gallery/gallery-25.jpg",
  "/gallery/gallery-26.jpg",
  "/gallery/gallery-27.jpg",
];

export default function ImageGallery() {
  return (<>
    <h2 className={imageGalleryStyles.title}>სურათების გალერეა</h2>
    <div className={imageGalleryStyles.grid}>
      {images.map(image => <div key={image} className={imageGalleryStyles.img__box}>
        <img className={imageGalleryStyles.img} src={image} alt="" />
      </div>)}
    </div>
  </>
  );
}