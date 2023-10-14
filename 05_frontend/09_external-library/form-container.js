import React from "react";
import { useForm } from "react-hook-form";
import FormPresentation from "./form-presentation";

export default function FormContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const validate = (name, rules) => {
    const originalProps = register(name, rules);
    return { ...originalProps };
  };

  return (
    <FormPresentation validate={validate} onSubmit={handleSubmit(onSubmit)} />
  );
}
