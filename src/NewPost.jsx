/* New Recipe form moved into functioin*/

export function NewPost(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <textarea name="title" className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Body
          </label>
          <textarea name="body" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Image URL
          </label>
          <textarea name="image" className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
