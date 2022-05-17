import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products..." />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
        {/* A relative link is a link that does not starts with
        the forward slash and will inherit the closest route in
        which they are rendered.  */}
      </nav>
      <Outlet />
      {/* The Outlet component renders the component corresponding
      to the matching child route from the parent list of routes. */}
    </>
  );
};