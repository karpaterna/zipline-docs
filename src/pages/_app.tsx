import { Inter } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate='Zipline - %s'
        defaultTitle='Zipline'
        themeColor='#3498db'
        additionalLinkTags={[
          { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
          { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
          { rel: 'icon', type: 'image/png', href: '/favicons/favicon-64x64.png', sizes: '64x64' },
          { rel: 'icon', type: 'image/png', href: '/favicons/favicon-128x128.png', sizes: '128x128' },
          { rel: 'icon', type: 'image/png', href: '/favicons/favicon-512x512.png', sizes: '512x512' },
        ]}
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width,initial-scale=1' },
          { httpEquiv: 'x-ua-compatible', content: 'IE=edge' },
        ]}
      />
      <ThemeProvider attribute='class'>
        <Layout inter={inter}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
