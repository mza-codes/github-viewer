import { useState } from "react";
import Search from "../components/Search/Search";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="flex flex-col items-center gap-6 mt-4 min-h-screen">
      <Search dispatch={setData} />
      <section className="flex flex-row flex-wrap gap-2 items-center justify-center">
        {data &&
          data?.map((repo: any) => (
            <div className="bg-green-100 w-52 h-52 text-lg font flex flex-col text-left p-2">
              <a href={repo?.html_url}>{repo?.name}</a>
              <span className="text-lg">Author: {repo?.owner?.login}</span>
              <span className="text-base">Updated At: {new Date(repo?.updated_at).toLocaleDateString()}</span>
              <span className="text-sm">Status: {repo?.visibility}</span>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
