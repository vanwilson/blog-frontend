import "./App.css";
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

/* New Recipe form moved into functioin*/
function NewPost() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="url" />
        </div>
      </form>
    </div>
  );
}

function AllPosts(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} />
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Same Old, Same Ol'",
      body: "Yippy skippy!",
      image: "example",
    },
    {
      id: 2,
      title: "Some More of the Same",
      body: "Did I say this already?",
      image: "example2",
    },
    {
      id: 3,
      title: "I don't know either",
      body: "This is what my 2 year olds says.",
      image: "example3",
    },
  ];
  return (
    <div>
      <NewPost />
      <AllPosts posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
