import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name here..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72 rounded-[10px]"
      />

      {username !== "" && (
        <div className="mt-2 flex justify-center">
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
