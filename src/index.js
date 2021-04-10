fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((res) => {
    const div = document.createElement("div");
    div.innerText = res.content;
    document.querySelector("body").appendChild(div);
  });
