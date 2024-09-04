import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-[3px] bg-yellow-50 px-4 py-2 text-sm placeholder:text-stone-400"
      ></input>
      <Button>Search</Button>
    </form>
  );
}

export default SearchOrder;
