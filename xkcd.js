fetch(
  "https://fwd.innopolis.university/api/hw2?" +
    new URLSearchParams({
      email: "l.meshcheriakov@innopolis.university",
    })
)
  .then((response) => {
    return response.text();
  })
  .then((response) => {
    return fetch(
      "https://fwd.innopolis.university/api/comic?" +
        new URLSearchParams({
          id: response,
        })
    );
  })
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    
    let titleElement = document.getElementById('xkcd-title');
    titleElement.innerText = response['safe_title'];

    let imageElement = document.getElementById('xkcd-image');
    imageElement.src = response.img;
    imageElement.alt = response.alt;
    imageElement.style.display = null;

    let date = new Date(parseInt(response.year), parseInt(response.month), parseInt(response.day));
    
    let dateElement = document.getElementById('xkcd-date');
    dateElement.innerText = 'Published at ' + date.toLocaleDateString();
    dateElement.style.display = null;
  });
