import React, {useEffect, useState} from 'react';
import requests from "../../utils/request";
import SingleItemPreview from "../../src/components/Catalog/SingleItemPreview";
import Slider from "react-slick";
import nextArrow from "../../public/arrow-next.svg";
import prevArrow from "../../public/arrow-prev.svg";
import Image from "next/image";
import AddToCartModal from "../../src/components/Cart/AddCartModal";
import Link from 'next/link';
import {FaAngleLeft} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Draggable from "../../src/components/Draggable/Draggable";

interface Props {
    catalog?: any
}

const CatalogCarousel: React.FC<Props> = ({catalog}) => {
    const [pages, setPages] = useState([])
    const [showModal, setShowModal] = useState({show: false, item: null})
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrowCircle/>,
        prevArrow: <PrevArrowCircle/>,
    })
    const [windowInfo, setWindowInfo] = useState({width: 0, height: 0})

    useEffect(() => {
        console.log(catalog);
        if (catalog.length > 0) {
            setPages(catalog[0].pages)
            if (catalog[0].pages.length === 1) {
                setSettings(prevState => ({
                    ...prevState, slidesToScroll: 1,
                    slidesToShow: 1
                }))
            }
        }
    }, [catalog])


    console.log(windowInfo)

    return (
        <div className="catalog-page">
            <div className="catalog-header">

            </div>
            <div className="catalog-component">

                <Link href="/" className='fixed left-16 top-4'>
                    <button className="text-4xl  z-50 bg-[#8DC14F] rounded-full "><FaAngleLeft className='text-white'/>
                    </button>
                </Link>
                {/*<Slider {...settings}>
                {
                    pages.length > 0 && pages.map((item: any, index) => (
                        <div key={`page-slider-${index}`}>
                            {item.items && item.items.length > 0 &&
                                <SingleItemPreview
                                    coordinates={item.items.map((it: any) => ({
                                        ...it.coordinates,
                                        id: it._id,
                                        name: it.product_name
                                    })).flatMap((a: any) => a)}
                                    strokeImageUrl={item.page_image}
                                    height={item?.items[0]?.coordinates?.imageHeight * 1.2}
                                    width={item?.items[0]?.coordinates?.imageWidth *  1.2 }
                                    handleSelection={({itemId, itemName}) => {
                                        const selectedProduct = item.items.find((it: { _id: string; }) => it._id === itemId)
                                        setShowModal({show: true, item: selectedProduct})
                                    }}
                                    imageHeight={item?.items[0]?.coordinates?.imageHeight}
                                    imageWidth={item?.items[0]?.coordinates?.imageWidth}
                                />
                            }
                        </div>
                    ))
                }
            </Slider>*/}
                <Draggable pages={pages} setShowModal={setShowModal}/>

                {showModal.show && showModal.item && <AddToCartModal item={showModal.item}
                                                                     handler={() => setShowModal(prevState => ({
                                                                         ...prevState,
                                                                         show: false
                                                                     }))}/>}

            </div>
        </div>
    );
}

export default CatalogCarousel;

export const getServerSideProps = async (context: any) => {

    const catalog = await Promise.all([
        fetch(requests.findCatalogById(context.query.catalogId)).then((res) => res.json())
    ])

    console.log(catalog)

    return {
        props: {
            catalog: catalog
        }
    }

}

export function NextArrowCircle({className, style, onClick}: any) {
    return (
        <div
            className={`${className}`}
            style={style}
            onClick={onClick}
            draggable={false}
        >
            <Image fill src={nextArrow} alt={""}/>
        </div>
    );
}

export function PrevArrowCircle({className, style, onClick}: any) {
    return (
        <div
            className={`${className}`}
            style={style}
            onClick={onClick}
            draggable={false}
        >
            <Image fill src={prevArrow} alt={""}/>
        </div>
    );
}