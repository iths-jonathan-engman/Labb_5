const getUser = () => {
    fetch("https://api.github.com/users/" + input.value)
      .then(response => response.json())
      .then(users => {
        const user = users;

        const imgElement = document.createElement("img");
        imgElement.src = user.avatar_url

        const nameElement = document.createElement("p");
        nameElement.textContent = user.name;

        const userBlog = document.createElement("a");
        userBlog.textContent = user.blog;
        userBlog.href = user.blog;

        const userElement = document.getElementById("content");
        userElement.innerHTML = "";

        userElement.appendChild(imgElement);
        userElement.appendChild(nameElement);
        userElement.appendChild(userBlog);
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  
  document.getElementById("submitBtn").addEventListener("click", getUser);