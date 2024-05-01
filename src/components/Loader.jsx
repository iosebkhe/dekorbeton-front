import loaderStyles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={loaderStyles.dot_spinner}>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
      <div className={loaderStyles.dot_spinner__dot}></div>
    </div>
  );
}