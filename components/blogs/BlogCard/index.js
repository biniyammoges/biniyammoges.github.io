import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

import classes from "./BlogCard.module.css";

const index = ({ blog }) => {
  const { title, slug, createdAt, tags } = blog.attributes;
  const tagArray = tags.split(", ");

  return (
    <Link href={`/blogs/${slug}`}>
      <a key={blog.id} className={classes.blogCard}>
        <p className={classes.blogTitle}>
          {title.length <= 65 ? title : title.substring(0, 65) + ".."}
        </p>
        <div className={classes.tags}>
          {tagArray.map((tag, idx) => (
            <span key={idx}>#{tag}</span>
          ))}
        </div>
        <div className={classes.author}>
          <span>{moment(createdAt).format("MMM Do YY")}</span>{" "}
        </div>
      </a>
    </Link>
  );
};

export default index;
