/* New Recipe form moved into functioin*/
export function NewPost() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Body
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Image URL
        </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
      </div>
      {/* <form>
        <div className="box">
          Title: <input type="text" />
        </div>
        <div className="box">
          Body: <input type="text" />
        </div>
        <div className="box">
          Image: <input type="url" />
        </div>
      </form> */}
    </div>
  );
}
