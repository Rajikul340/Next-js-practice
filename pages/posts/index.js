import Post from "../../Components/Post/Post";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1 className="m-5"> Post Details</h1>
      <div className="m-5 p-5">
        {posts.map((singlepost) => (
          <Post key={singlepost._id} singlepost={singlepost} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
