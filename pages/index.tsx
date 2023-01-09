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
import requests from '../utils/request';
import { Catelog } from '../typings';
import React from 'react';
import Cart from "../src/components/Cart/cart";

interface Props {
    catelogs: Catelog[]
}

const Home: React.FC<Props> = ({ catelogs }) => {
    console.log({catelogs})
    return (

        <div>
            <Header/>
            <Main catelogs={catelogs}/>

            <section className='container mx-auto px-8 flex flex-col gap-10 my-10'>
                <Category />
                <LatestFlyers catelogs={catelogs}/>
                <Shops />
                <LatestItems />
                <News />
                <Cities />

            </section>

            <Footer />
        </div>

    )
}

export default Home

export const getServerSideProps = async () => {

    const [catelogs] = await Promise.all([
        fetch(requests.fetchCatelogs).then((res) => res.json())
    ])

    console.log(catelogs)

    return {
        props: {
            catelogs: catelogs
        }
    }

}