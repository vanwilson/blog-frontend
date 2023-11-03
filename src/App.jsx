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

function AllPosts() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="blogpost">
        <h2>Big Mistake</h2>
        <p>I started making recipes rather than blog posts.</p>
        <img src="#" alt="" />
      </div>
      <div className="blogpost">
        <h2>Another Whoops</h2>
        <p>I forgot to return the content within the App function and the website wouldn't show anything.</p>
        <img src="#" alt="" />
      </div>
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
  return (
    <div>
      <NewPost />
      <AllPosts />
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
