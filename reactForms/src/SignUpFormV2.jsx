import { useState } from "react";
export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function updateFormData(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={updateFormData}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={updateFormData}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <>
          <h3>{formData.firstName}</h3>
          <h3>{formData.lastName}</h3>
        </>
      )}
    </div>
  );
}
