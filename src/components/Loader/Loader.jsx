import css from './style.module.css';


const Loader = () => {
  return (
    <div className={css.loaderDiv}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;