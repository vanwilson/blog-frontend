/* eslint-disable react/prop-types */
export function AllPosts(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="container text-center">
        <div className="row row-cols-3">
          {props.posts.map((post) => (
            <div key={post.id} className="col">
              <div className="card">
                <h2>{post.title}</h2>
                {/* <p>{post.body}</p> */}
                <img src={post.image} onClick={() => props.onShowPost(post)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
