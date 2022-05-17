import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <nav>
        <Link to="user1">User1</Link>
        <Link to="user2">User2</Link>
        <Link to="user3">User3</Link>
      </nav>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams()}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h3>"Showing active users"</h3>
      ) : (
        <h3>"Showing all users"</h3>
      )}
    </div>
  );
};