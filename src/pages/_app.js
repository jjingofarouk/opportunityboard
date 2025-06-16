import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Global styles
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="description" content="Discover research opportunities, fellowships, and funding worldwide" />
        <title>Opportunity Board</title>
      </Head>
      
      <div className="app">
        <Navbar />
        <main className="main">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main {
          flex: 1;
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}