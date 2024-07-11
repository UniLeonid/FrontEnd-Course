import { formatDistance } from 'date-fns';

interface RawXkcdResponse {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
}

export interface XkcdResponse {
    safeTitle: string;
    img: string;
    alt: string;
    date: Date;
    fromNow: string;
}

export async function fetchXkcd(): Promise<XkcdResponse> {
    return fetch(
        'https://fwd.innopolis.university/api/hw2?' +
            new URLSearchParams({
                email: 'l.meshcheriakov@innopolis.university'
            })
    )
        .then((response: Response) => {
            return response.text();
        })
        .then((response: string) => {
            return fetch(
                'https://fwd.innopolis.university/api/comic?' +
                    new URLSearchParams({
                        id: response
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
                addSuffix: true
            });
            return {
                safeTitle: response.safe_title,
                img: response.img,
                alt: response.alt,
                date: date,
                fromNow: fromNow
            };
        });
}
