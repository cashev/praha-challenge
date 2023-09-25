import React from "react";

export default function FormPresentation({ validate, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="First name"
        {...validate("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...validate("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...validate("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12
        })}
      />
      <input
        type="text"
        placeholder="Email"
        {...validate("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <select {...validate("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input
        {...validate("Developer", { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...validate("Developer", { required: true })}
        type="radio"
        value="No"
      />

      <input type="submit" />
    </form>
  );
}
