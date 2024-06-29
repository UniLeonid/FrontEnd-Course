import { formatDistance } from "date-fns";

interface RawXkcdResponse {
  safe_title: string;
  img: string;
  alt: string;
  year: string;
  month: string;
  day: string;
}

interface XkcdResponse {
  safeTitle: string;
  img: string;
  alt: string;
  date: Date;
  fromNow: string;
}

async function fetchXkcd(): Promise<XkcdResponse> {
  return fetch(
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
      return response.json() as Promise<RawXkcdResponse>;
    })
    .then((response: RawXkcdResponse) => {
      let date: Date = new Date(
        parseInt(response.year),
        parseInt(response.month),
        parseInt(response.day)
      );
      let fromNow: string = formatDistance(date, new Date(), {
        addSuffix: true,
      });
      return {
        safeTitle: response.safe_title,
        img: response.img,
        alt: response.alt,
        date: date,
        fromNow: fromNow,
      };
    });
}

fetchXkcd().then((response: XkcdResponse) => {
  let titleElement: HTMLElement | null = document.getElementById("xkcd-title");
  if (titleElement) {
    titleElement.innerText = response.safeTitle;
  }

  let imageElement: HTMLElement | null = document.getElementById("xkcd-image");
  if (imageElement instanceof HTMLImageElement) {
    imageElement.src = response.img;
    imageElement.alt = response.alt;
    imageElement.style.display = "";
  }

  let dateElement: HTMLElement | null = document.getElementById("xkcd-date");
  if (dateElement) {
    dateElement.innerText =
      "Published at " +
      response.date.toLocaleDateString() +
      " | " +
      response.fromNow;
    dateElement.style.display = "";
  }
});
