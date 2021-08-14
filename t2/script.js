const paramTemplate = '<input class="q-input" placeholder="Param Key" />';
const queryTemplate =
  '<input class="q-input" placeholder="Query Key" /><input class="q-input" placeholder="Query Value" />';
const baseUrl = "https://website.ir";

const addNewParam = () => {};
const addNewQuery = () => {};
const generateURL = () => {};

const renderUrl = (url) => {
  const el = document.getElementById("url-container");
  el.innerHTML = `<p>${url}</p>`;
};

document.getElementById("param-submit").addEventListener("click", addNewParam);
document.getElementById("query-submit").addEventListener("click", addNewQuery);
document.getElementById("generate").addEventListener("click", generateURL);
