// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchGithubData = async () => {
//       try {
//         const res = await fetch("https://api.github.com/users/Yash-Rawat-IMA");
//         const data = await res.json();
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchGithubData();
//   }, []);

//   if (!data) {
//     return <h1 className="bg-amber-200 text-center text-5xl">Loading...</h1>;
//   }

    const data = useLoaderData()

  return (
    <div className="relative bg-gray-600 text-white p-4">
      <div className="absolute top-4 right-4">
        <figure className="ml-0">
          <img
            src={data.avatar_url}
            alt="Github Avatar"
            className="w-10 h-10 rounded-lg"
          />
          <figcaption className="items-center">{data.name}</figcaption>
        </figure>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">Hey! {data.name}</h1>
        <h3>Your Repo Count: {data.public_repos}</h3>
      </div>
    </div>
  );
}

export default Github

export const githubLoader = async () => {
    const res = await fetch('https://api.github.com/users/Yash-Rawat-IMA')

    return res.json();
}