import type { Metadata } from 'next';
import Link from 'next/link';
import './style.css';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'LeonidM',
    description: 'LeonidM profile page',
    authors: [{ name: 'LeonidM' }]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </head>
            <body>
                {/* Header */}
                <div className='container header-container'>
                    <Link href={'/'} legacyBehavior>
                        <Button>About me</Button>
                    </Link>
                    <Link href={'/comic'} legacyBehavior>
                        <Button>XKCD</Button>
                    </Link>
                </div>

                {children}

                {/* Footer */}
                <div className='container footer-container'>
                    <a>By LeonidM</a>
                </div>
            </body>
        </html>
    );
}
