import React from 'react'
import Script from 'next/script'
import '../src/styles/global.scss'

export default function MyApp({ Component, pageProps }){
    return(
        <>
            <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=UA-123850556-89`} />
            <Script id='script-analytics' strategy="lazyOnload">
                {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'UA-123850556-89');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}