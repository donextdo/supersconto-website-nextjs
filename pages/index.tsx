import Head from 'next/head'
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main"
import LatestFlyers from '../src/components/LatestFlyers/LatestFlyers';
import News from '../src/components/News/News'
import Category from '../src/components/Category/Category';
import Shops from '../src/components/Shops/Shops';
import LatestItems from '../src/components/LatestItems/LatestItems';
import Cities from '../src/components/Cities/Cities';
import Footer from '../src/components/Footer/Footer';

export default function Home() {
    return (

        <div>
            <Header/>
            <Main />

            <section className='container mx-auto px-8 flex flex-col gap-10 my-10'>
                <Category />
                <LatestFlyers />
                <Shops />
                <LatestItems />
                <News />
                <Cities />
            </section>

            <Footer />
        </div>

    )
}

