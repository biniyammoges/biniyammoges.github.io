import BlogHeader from "@/components/blogs/BlogHeader";
import BlogCard from "@/components/blogs/BlogCard";
import classes from "@/styles/Blog.module.css";
import Footer from "@/components/Footer";
import Pagination from "@/components/blogs/Pagination";
import ErrorMessage from "@/components/error";

import blogsApi from "@/services/blogs";

const index = ({ data, error }) => {
  const blogs = data?.data;

  return (
    <>
      <div className="showcase">
        <BlogHeader />
      </div>
      <div className={classes.blogShowcase}>
        <div className="container">
          <div className={classes.content}>
            <span>New blog every week</span>
            <h1>
              <span>Learn</span> Everything I Have Learned Through a
              <span> Long Time</span>
            </h1>
            <p>
              I write clear, concise, and easy-to-follow tutorials on web
              development.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.blogs}>
        <div className={classes.flex + " container"}>
          {error ? (
            <ErrorMessage error={error} />
          ) : (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          )}
        </div>
        {!error && blogs.length > 20 && <Pagination />}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const response = await blogsApi.getAll();

  if (!response.data)
    return {
      props: {
        error: response.error,
      },
    };

  return {
    props: {
      data: response.data,
    },
    revalidate: 10,
  };
}

export default index;
