import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
export default function secondPost() {
    return (
        <>
            <Head>
                <title>some1 was here</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>some1 was here</h1>
            <h2>
                <Link href="/posts/first-post">
                    <a>to first post</a>
                </Link>
            </h2>
        </>
    );
}