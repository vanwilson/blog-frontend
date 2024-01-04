/* eslint-disable react/prop-types */
import { useState } from "react";

export function AllPosts(props) {
  console.log(props);

  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
      <div className="container text-center">
        <div className="row row-cols-3">
          {props.posts
            .filter((post) => post.title.includes(searchFilter))
            .map((post) => (
              <div key={post.id} className="col">
                <div className="card">
                  <h2>{post.title}</h2>
                  <img src={post.image} onClick={() => props.onShowPost(post)} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
