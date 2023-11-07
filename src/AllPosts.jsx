/* eslint-disable react/prop-types */
export function AllPosts(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
        {props.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} onClick={props.onShowPost} />
          </div>
        ))}
      </div>
    </div>
  );
}
