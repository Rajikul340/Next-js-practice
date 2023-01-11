import Link from "next/link";

const Post = ({ singlepost }) => {
  console.log(singlepost);

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure></figure>
        <div className="card-body">
          <p>postid {singlepost.id}</p>
          <h2 className="card-title">title{singlepost.title}</h2>
          <div className="card-actions justify-end">
            <Link href={`/posts/${singlepost.id}`}>
              <button className="btn btn-primary">see details </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
