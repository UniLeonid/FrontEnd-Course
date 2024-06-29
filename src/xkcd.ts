interface XkcdResponse {
  safe_title: string;
  img: string;
  alt: string;
  year: string;
  month: string;
  day: string;
}

fetch(
  "https://fwd.innopolis.university/api/hw2?" +
    new URLSearchParams({
      email: "l.meshcheriakov@innopolis.university",
    })
)
  .then((response: Response) => {
    return response.text();
  })
  .then((response: string) => {
    return fetch(
      "https://fwd.innopolis.university/api/comic?" +
        new URLSearchParams({
          id: response,
        })
    );
  })
  .then((response: Response) => {
    return response.json() as Promise<XkcdResponse>;
  })
  .then((response: XkcdResponse) => {
    let titleElement = document.getElementById('xkcd-title');
    if (titleElement) {
      titleElement.innerText = response.safe_title;
    }

    let imageElement = document.getElementById('xkcd-image');
    if (imageElement instanceof HTMLImageElement) {
      imageElement.src = response.img;
      imageElement.alt = response.alt;
      imageElement.style.display = '';
    }

    let date = new Date(parseInt(response.year), parseInt(response.month), parseInt(response.day));
    
    let dateElement = document.getElementById('xkcd-date');
    if (dateElement) {
      dateElement.innerText = 'Published at ' + date.toLocaleDateString();
      dateElement.style.display = '';
    }
  });
