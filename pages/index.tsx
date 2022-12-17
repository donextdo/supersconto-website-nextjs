import Head from 'next/head'
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main"
import LatestFlyers from '../src/components/LatestFlyers/LatestFlyers';
import News from '../src/components/News/News'

export default function Home() {
    return (

        <div>
            <Header/>
            <Main />

            <section className='container mx-auto px-8 flex flex-col gap-10 my-10'>
                <LatestFlyers />
                <News />
            </section>
        </div>

    )
}

