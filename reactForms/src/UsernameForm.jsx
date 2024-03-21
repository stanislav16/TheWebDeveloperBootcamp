import { useState } from "react";
export default function UsernameForm() {
  const [username, setUsername] = useState("");

  function updateUsername(event) {
    setUsername(event.target.value);
  }

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={updateUsername}
      />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault;
        }}
      >
        Submit
      </button>
    </form>
  );
}
