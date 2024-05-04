import videoStyles from "./Video.module.css";

export default function Video() {
  return (
    <div className={videoStyles.video}>
      <video autoPlay muted loop>
        <source src="/dekorbeton-cover-video.mp4" />
      </video>
      <span></span>
      <p className={videoStyles.video__text}>
        დეკორატიული ბეჭდური ბეტონი <strong>Press Concrete</strong>
      </p>
    </div>
  );
}