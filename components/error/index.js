import classes from "./Error.module.css";

const index = ({ error }) => {
  return (
    <div className={classes.error}>
      <h2>😥️ Oops, something went wrong</h2>
      <p>{error}, We`re sorry, please refresh the page and try again</p>
    </div>
  );
};

export default index;
