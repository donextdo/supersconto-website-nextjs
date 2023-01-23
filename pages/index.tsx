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
import { Catelog, Itm } from '../typings';
import React, {useEffect, useState} from 'react';
import Ad from '../src/components/Ad/Ad';
import {useRouter} from "next/router";

interface Props {
    catelogs: Catelog[]
    itms : Itm[]

}

const Home: React.FC<Props> = ({ catelogs,itms }) => {
    const [userCoordinates, setUserCoordinates] = useState<any>()
    const router = useRouter()

    useEffect(() => {
        getLocation()
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
    return (

        <div>
            <Header/>
            <Main catelogs={catelogs}/>
            <Ad />

            <section className='container mx-auto px-8 flex flex-col gap-10 my-10'>
                <Category />
                <LatestFlyers catelogs={catelogs}/>
                <Shops />
                <LatestItems itms={itms}/>
                <News />
                <Cities />

            </section>

            <Footer />
        </div>

    )
}

export default Home

export const getServerSideProps = async (context: { query: { long: any; lat: any; }; }) => {
    const url = context.query.long && context.query.lat ? `${requests.fetchCatelogs}?long=${context.query.long}&lat=${context.query.lat}` : requests.fetchCatelogs

    const [catelogs,itms] = await Promise.all([
        fetch(url).then((res) => res.json()),
        fetch(requests.getLatestItemId).then((res) => res.json())
    ])

    console.log(catelogs)

    return {
        props: {
            catelogs: catelogs,
            itms : itms
        }
    }

}