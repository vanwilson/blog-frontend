import { AllPosts } from "./AllPosts";
import { NewPost } from "./NewPost";
import { Modal } from "./Modal";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Same Old, Same Ol'",
      body: "Yippy skippy!",
      image:
        "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Some More of the Same",
      body: "Did I say this already?",
      image:
        "https://thumbs.dreamstime.com/b/aerial-view-lago-antorno-dolomites-lake-mountain-landscape-alps-peak-misurina-cortina-di-ampezzo-italy-reflected-103752677.jpg",
    },
    {
      id: 3,
      title: "I don't know either",
      body: "This is what my 2 year olds says.",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
    },
  ];
  return (
    <div>
      <NewPost />
      <AllPosts posts={posts} />
      <Modal show={true}>
        <p>Welcome to my little slice of heaven.</p>
      </Modal>
    </div>
  );
}
