import Link from "next/link";

const Errorpage = () => {
  return (
    <div className=" text-center">
      <h1>Page not found </h1>
      <Link className="text-blue-400" href="/">
        back to home{" "}
      </Link>
    </div>
  );
};

export default Errorpage;
