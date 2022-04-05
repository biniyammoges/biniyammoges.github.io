import Footer from "@/components/Footer";
import Header from "@/components/showcase/Header";
import classes from "@/styles/NotFound.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header + " showcase"}>
        <Header />
      </div>
      <div className={classes.content}>
        <div className={classes.text}>
          <span>Server Error</span>
          <h1>Oops! Error 500</h1>
          <p>
            We{"'"}e sorry, we are having some issues, let us take you back to
            homepage
            {/* The page that you are followed by is may be broken or removed by us! */}
          </p>
          <Link href="/">Go To Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
