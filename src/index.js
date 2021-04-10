fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((res) => {
    const h2 = document.createElement("h2");
    h2.innerText = res.content;
    document.querySelector("body").appendChild(h2);
  });
