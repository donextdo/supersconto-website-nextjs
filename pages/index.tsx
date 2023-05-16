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
import { Catalog, Item , Shop, Categories} from '../typings';
import React, {useEffect, useState} from 'react';
import Ad from '../src/components/SpecialFlyers/Ad';
import {useRouter} from "next/router";
import { useTranslation } from 'next-i18next';
import ProductList from '../src/features/product/ProductList';


interface Props {
    catalogs: Catalog[]
    items : Item[]
    shops: Shop[]
    news:any
    categories: Categories
}

const Home: React.FC<Props> = ({ catalogs, shops, items ,news, categories}) => {
    const [userCoordinates, setUserCoordinates] = useState<any>()
    const router = useRouter()

    const { t } = useTranslation();
    
    useEffect(() => {
        getLocation()
        console.log(news)
        console.log(categories)

    }, [])

    useEffect(() => {
        console.log(userCoordinates?.coords)
        if (userCoordinates?.coords){
            const query = {
                lat: userCoordinates.coords.latitude,
                long: userCoordinates.coords.longitude
            }
            router.replace({
                pathname: `/`, query
            }, undefined, {shallow: false})
        }

    }, [userCoordinates])



    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setUserCoordinates);
        }
    }
    // console.log(shops)
    return (

        <div>
            <Header/>
            <Main catalogs={catalogs}/>
            <Ad />

            <section className='mx-auto px-10 flex flex-col gap-10 my-10'>
            {/* <h1>{t('welcome')}</h1>; */}
                <Category categories={categories}/>
                <LatestFlyers catalogs={catalogs}/>
                <Shops shops={shops}/>
                <LatestItems items={items}/>
                <ProductList />
                <News allnews={news}/>
                <Cities shops={shops} />
            </section>

            {/* <Footer /> */}
        </div>

    )
}

export default Home

export const getServerSideProps = async (context: { query: { long: any; lat: any; }; }) => {
    const url = context.query.long && context.query.lat ? `${requests.fetchCatelogs}?long=${context.query.long}&lat=${context.query.lat}` : requests.fetchCatelogs

    const [catalogs, items, shops, news, categories] = await Promise.all([
        fetch(url).then((res) => res.json()),
        fetch(requests.getLatestItemId).then((res) => res.json()),
        fetch(requests.allShops).then((res) => res.json()),
        fetch(requests.allNews).then((res) => res.json()),
        fetch(requests.allCategory).then((res) => res.json())


    ])

    console.log(catalogs)

    return {
        props: {
            catalogs: catalogs,
            items : items,
            shops : shops,
            news : news,
            categories : categories
        }
    }

}