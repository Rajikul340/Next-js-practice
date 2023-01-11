import { useRouter } from "next/router";

const PostId = ({ post }) => {
  console.log(post);
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="border  w-1/2 my-5 mx-auto">
      <h1 className="text-2xl p-4 text-accent">{post.title}</h1>
      <p>{post.body}</p>
      <button className="btn btn-accent w-full mt-5" onClick={handleBack}>
        Back to Home{" "}
      </button>
    </div>
  );
};

export default PostId;

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((singledata) => {
    return {
      params: {
        postId: `${singledata.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
