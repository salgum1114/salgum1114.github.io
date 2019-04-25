import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-97485289-2" />
                    <script>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-97485289-2');
                        `}
                    </script>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
                    <meta name="google-site-verification" content="YCCU8qpDKf7ka8WDDPA6rt1y0m9egFSi7zeHgmayb6Y" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/static/images/favicon/icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon/favicon-96x96.png" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css" />
                    <style jsx global>
                        {`
                            body {
                                height: 100%;
                                width: 100%;
                            }
                            body > div:first-child,
                            #__next,
                            #__next > div,
                            #__next > div > div {
                                height: 100%;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}