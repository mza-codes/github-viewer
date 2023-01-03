import { useRef } from "react";
import { fetchRepos } from "../../services/apiService";

const disableBtn = (bool: boolean, ref: HTMLButtonElement) => {
  ref.disabled = bool ?? false;
  return true;
};

const Search = ({ dispatch }: any) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleSearch = async (e: any) => {
    disableBtn(true, btnRef.current);
    const res = await fetchRepos(e?.target?.value);
    disableBtn(false, btnRef.current);
    if (res) dispatch(res);
    return true;
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch(e);
    else return;
  };
  return (
    <div className="flex flex-col gap-2">
      <input
        onKeyPress={handleKeyPress}
        type="text"
        className="p-2 rounded-md border-zinc-900"
      />
      <button
        ref={btnRef}
        className="bg-red-400 p-2 rounded-lg hover:bg-red-500 disabled:bg-slate-400"
        type="button"
        onClick={handleSearch}
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
