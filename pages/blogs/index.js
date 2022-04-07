import { useRef, useState } from "react";

import classes from "@/styles/Blog.module.css";
import blogsApi from "@/services/blogs";

import BlogHeader from "@/components/blogs/BlogHeader";
import BlogCard from "@/components/blogs/BlogCard";
import Footer from "@/components/Footer";
import Pagination from "@/components/blogs/Pagination";
import ErrorMessage from "@/components/error";

const Index = ({ data, error }) => {
  const currentPage = data?.meta?.pagination.page;
  const count = data?.meta?.pagination?.pageCount;
  const totalCount = data?.meta?.pagination.total;

  const [blogs, setBlogs] = useState(data?.data);
  const [page, setPage] = useState(currentPage);
  const [pages, setPages] = useState(count);
  const [total, setTotal] = useState(totalCount);
  const wrapperRef = useRef(null);

  const onPageChange = async (page) => {
    setPage(page);

    const { data } = await blogsApi.getAll(page);
    setBlogs(data.data);
    wrapperRef.current.scrollIntoView();
  };

  if (!data) return <h2>No data to show</h2>;

  return (
    <>
      <div className="showcase">
        <BlogHeader />
      </div>
      <div className={classes.blogShowcase}>
        <div className="container">
          <div className={classes.content}>
            <span>Easy to follow tutorials</span>
            <h1>
              Learn <span>Everything</span> I{"'"}ve Learned Over a Long Period
              of Time
            </h1>
            <p>
              I write clear, concise, and easy-to-follow tutorials on web
              development.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.blogs} ref={wrapperRef}>
        <div className={classes.flex + " container"}>
          {error ? (
            <ErrorMessage error={error} />
          ) : data ? (
            blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <div>
              <h1>Failed to fetch data</h1>
            </div>
          )}
        </div>
        {!error && total > 9 && (
          <Pagination page={page} pages={pages} onPageChange={onPageChange} />
        )}
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const response = await blogsApi.getAllFromServer();

  if (response.error)
    return {
      props: {
        error: response.error,
      },
    };

  return {
    props: {
      data: response,
    },
  };
}

export default Index;
