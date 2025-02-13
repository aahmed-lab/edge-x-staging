import Document, { Head, Main, NextScript, Html } from 'next/document';
import transConfig from '~/translation.json';
const { languages, defaultLanguage } = transConfig;

/* -------------------------------------------------------------------------- */
/*                                  DOCUMENT                                  */
/* -------------------------------------------------------------------------- */

export default class NextDocument extends Document {
   render() {
      /* -------- Just getting direction and language inside html elements -------- */

      const langs = languages as Record<string, string>;
      const props = this.props.__NEXT_DATA__;
      const lang = props?.query?.lang || defaultLanguage;
      const direction = langs[lang + ''] || 'ltr';
      return (
         <Html
            lang={lang + ''}
            dir={direction}
            className="font-primary antialiased  ltr:font-en rtl:font-ar">
            <Head>
               <meta charSet="utf-8" />
               <meta name="google" content="notranslate" />
               {/* //todo */}
               <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
               {/* <link rel="stylesheet" href="https://use.typekit.net/zmf4cef.css" /> */}
               {/* Google Analytics */}
               <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=G-43WXCWVW09"></script>
               <script
                  dangerouslySetInnerHTML={{
                     __html: `
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', 'G-43WXCWVW09');
                  `,
                  }}
               />
            </Head>
            <body
               id="body"
               dir={direction}
               lang={lang + ''}
               className="antialiased ltr:text-left ltr:font-en rtl:text-right rtl:font-ar">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
