import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeSlider from '../components/HomeSlider/HomeSlider';
import QuemSomos from '../components/QuemSomos/QuemSomos';

export default function Home() {
  return (
    <div id="home__page">
      <Head>
        <title>Alemão Futebol</title>
        <meta name="description" content="Alemão Futebol" />
      </Head>

      <Header />
      <main >
        <HomeSlider />
        <QuemSomos />
      </main>

      <Footer />
    </div>
  )
}
