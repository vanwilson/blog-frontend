/* New Recipe form moved into functioin*/
export function NewPost() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div className="box">
          Title: <input type="text" />
        </div>
        <div className="box">
          Body: <input type="text" />
        </div>
        <div className="box">
          Image: <input type="url" />
        </div>
      </form>
    </div>
  );
}
