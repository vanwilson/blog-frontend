import { AllPosts } from "./AllPosts";
import { NewPost } from "./NewPost";

export function Content() {
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
