import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import BlogHeader from "@/components/blogs/BlogHeader";
import RecentBlog from "@/components/blogs/RecentBlog";
import Footer from "@/components/Footer";
import ErrorMessage from "@/components/error";
import EmailCard from "@/components/blogs/EmailCard";

import classes from "@/styles/BlogPage.module.css";
import blogsApi from "@/services/blogs";
import remarkComponent from "@/utils/markdownOptions";
import Head from "next/head";

const Blog = ({ data, error, relatedBlogs }) => {
  const router = useRouter();
  const goBack = () => router.back();
  const blog = data?.data;

  return (
    <>
      <Head>
        <title>{blog.attributes.title}</title>
      </Head>
      <div className={classes.header + " showcase"}>
        <BlogHeader />
      </div>
      <div>
        <div className="container">
          <button className={classes.backBtn} onClick={goBack}>
            <FontAwesomeIcon style={{ marginRight: 8 }} icon={faChevronLeft} />
            Back
          </button>

          {error ? (
            <ErrorMessage error={error} />
          ) : (
            <div className={classes.flex}>
              <div className={classes.content}>
                <div
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingBottom: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h1 className={classes.title}>{blog?.attributes.title}</h1>
                  <div className={classes.author}>
                    <span>
                      Written by <strong>Biniyam Moges</strong>
                      {" - "}
                      {moment(blog?.attributes.date).format("MMM Do YY")}
                    </span>
                  </div>
                </div>
                <ReactMarkdown components={remarkComponent}>
                  {blog?.attributes.content}
                </ReactMarkdown>
                <div className={classes.thanks}>
                  <h4>🤩️ Thanks for reading!</h4>
                </div>
              </div>

              <div className={classes.recent}>
                <EmailCard />

                {relatedBlogs.length > 0 && (
                  <>
                    <h3>Related blogs</h3>
                    {relatedBlogs.map((relBlog) => (
                      <RecentBlog key={relBlog.id} blog={relBlog} />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await axios.get(`${process.env.API_URL}/api/blogs`);
  const blogs = await data.data;

  const paths = blogs.map((blog) => ({
    params: { slug: blog?.attributes.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const blogRes = await blogsApi.getOne(slug);

  if (blogRes.error) {
    return {
      props: {
        error: blogRes.error,
      },
    };
  }

  const { data: relatedBlogs } = await blogsApi.getRelated(
    blogRes.data.attributes.tags,
    blogRes.data.id
  );

  return {
    props: { data: blogRes, relatedBlogs },
    revalidate: 10,
  };
}

export default Blog;
