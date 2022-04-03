import moment from "moment";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import BlogHeader from "@/components/blogs/BlogHeader";
import RecentBlog from "@/components/blogs/RecentBlog";
import Footer from "@/components/Footer";
import ErrorMessage from "@/components/error";

import classes from "@/styles/BlogPage.module.css";
import blogsApi from "@/services/blogs";

const Blog = ({ data, error }) => {
  const router = useRouter();
  const goBack = () => router.back();
  const blog = data?.data;

  const remarkComponent = {
    code({ language, inline, children, className, ...props }) {
      return inline ? (
        <code
          style={{
            backgroundColor: "azure",
            padding: "4px 10px",
            borderRadius: "5px",
            fontSize: "14px",
          }}
          className={className}
          {...props}
        >
          {children}
        </code>
      ) : (
        <SyntaxHighlighter style={dracula} language={"javascript"} {...props}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <>
      <div className={classes.header + " showcase"}>
        <BlogHeader />
      </div>
      <div>
        <div className="container">
          <button className={classes.backBtn} onClick={goBack}>
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
                <div className={classes.subscribe}>
                  <h3>Subscribe for newsletter</h3>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Email address" />
                    <br />
                    <button>Subscribe</button>
                  </form>
                </div>

                <h3>Similar posts</h3>
                <RecentBlog
                  title={blog?.attributes.title}
                  imageUrl={"/assets/blogBg.jpg"}
                  date={blog?.attributes.date}
                />
                <RecentBlog
                  title={blog?.attributes.title}
                  imageUrl={"/assets/blogBg.jpg"}
                  date={blog?.attributes.date}
                />
                <RecentBlog
                  title={blog?.attributes.title}
                  imageUrl={"/assets/blogBg.jpg"}
                  date={blog?.attributes.date}
                />
                <RecentBlog
                  title={blog?.attributes.title}
                  imageUrl={"/assets/blogBg.jpg"}
                  date={blog?.attributes.date}
                />
                <RecentBlog
                  title={blog?.attributes.title}
                  imageUrl={"/assets/blogBg.jpg"}
                  date={blog?.attributes.date}
                />
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
  return {
    paths: [{ params: { slug: "" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const response = await blogsApi.getOne(slug);

  if (!response.data) {
    return {
      props: {
        error: response.error,
      },
    };
  }

  return {
    props: { data: response.data, revalidate: 10 },
  };
}

export default Blog;
