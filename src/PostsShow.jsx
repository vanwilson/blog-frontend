import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}`, params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  console.log(props);
  return (
    <div id="posts-show">
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button>Update Post</button>
      </form>
    </div>
  );
}
