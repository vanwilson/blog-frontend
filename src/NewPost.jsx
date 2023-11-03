/* New Recipe form moved into functioin*/
export function NewPost() {
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
