const submitHandler = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const response = await fetch("/addName", { method: "POST", body: formData });
  console.log(response);

};

const addSubmitEvent = (form) => {
  form.addEventListener("submit", submitHandler);
};

const main = () => {
  const form = document.querySelector("#name-box");
  addSubmitEvent(form);
};

globalThis.onload = main;
