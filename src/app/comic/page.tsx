import { XkcdResponse, fetchXkcd } from '@/utils/xkcd';
import Comic from '@/components/Comic';

export default async function ComicPage() {
    const xkcd: XkcdResponse = await fetchXkcd();

    return (
        <main id='xkcd-main'>
            <Comic xkcd={xkcd}></Comic>
        </main>
    );
}
