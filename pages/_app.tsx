import Script from 'next/script'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src='https://identity.netlify.com/v1/netlify-identity-widget.js'
        strategy='lazyOnload'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
