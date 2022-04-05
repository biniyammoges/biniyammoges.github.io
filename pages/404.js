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
          <span>Page Not Found</span>
          <h1>Oops! Error 404</h1>
          <p>
            The page that you are followed by is may be broken, please check the
            URL again or let us take you back to homepage
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
