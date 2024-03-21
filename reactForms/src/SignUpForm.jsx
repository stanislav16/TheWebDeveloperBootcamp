import { useState } from "react";
export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function updateFirstName(event) {
    setFirstName(event.target.value);
  }
  function updateLastName(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
  }

  return (
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={updateFirstName}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={updateLastName}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
