import Link from "next/link";
import React from "react";

const CustomLink = ({ className = "", href = "/", children, ...rest }) => {
  return (
    <Link href={href}>
      <a className={className} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
