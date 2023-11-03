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
      <div className="recipes">
        <h2>Coca-Cola</h2>
        <p>Buy Coca-Cola and drink from bottle.</p>
        <img src="#" alt="" />
      </div>
      <div className="recipes">
        <h2>Snickers Bar</h2>
        <p>Buy Snickers Bar, open and enjoy.</p>
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
