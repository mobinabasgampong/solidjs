import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { GliderInputEvent, RegisterForm, SubmitCallback } from "../types/Forms";

const useForm = (initialForm: RegisterForm) => {
  const [_formData, setFormData] = createStore<RegisterForm>(initialForm);
  const handleInput = (e: GliderInputEvent) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ..._formData,
      [name]: value,
    });
  };

  // const submitForm = (SubmitCallback: SubmitCallback) => () => {
  //   SubmitCallback(_formData);
  //   console.log(_formData);
  // };

  const submitForm = (SubmitCallback: SubmitCallback) => {
    SubmitCallback(_formData);
    console.log("UseForm Submit fired");
    //console.log(_formData);
  };

  return {
    handleInput,
    submitForm,
  };
};

export default useForm;

//test code
// import { createEffect, createSignal, onCleanup, onMount } from "solid-js";

// const useForm = () => {
//   const [count, setCount] = createSignal(100);

//   onMount(() => {
//     console.log("useForm Mounted");
//   });
//   onCleanup(() => {
//     console.log("useForm Cleaned up");
//   });
//   createEffect(() => {
//     console.log("useForm CreateEffect : ", count());
//   });

//   const increaseCount = () => {
//     setCount(count() + 1);
//   };

//   const decreaseCount = () => {
//     setCount(count() - 1);
//   };
//   return {
//     count,
//     increaseCount,
//     decreaseCount,
//     setCount,
//     testFunction: () => {
//       console.log("Test Function fired. Bang Bang!");
//     },
//   };
// };

// export default useForm;
