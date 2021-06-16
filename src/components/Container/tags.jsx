import React from "react";
import { Link } from "react-router-dom";

export default function Tags(props) {
  return (
    <Link className="nav-link text-dark pl-0 pe-2 px-md-3" to="/">
      {props.data}
    </Link>
  );
}
