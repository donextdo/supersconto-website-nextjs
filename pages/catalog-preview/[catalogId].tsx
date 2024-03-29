import React, { useEffect, useState, useRef } from 'react';
import requests from "../../utils/request";
import SingleItemPreview from "../../src/components/Catalog/SingleItemPreview";
import Slider from "react-slick";
import nextArrow from "../../public/arrow-next.svg";
import prevArrow from "../../public/arrow-prev.svg";
import Image from "next/image";
import AddToCartModal from "../../src/components/Cart/AddCartModal";
import Link from 'next/link';
import { FaAngleLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Draggable from "../../src/components/Draggable/Draggable";
import { RiShoppingCart2Fill } from "react-icons/ri";
import logo from '../../assets//logo/logo.png'
import NavbarCartModal from '../../src/components/Cart/NavbarCartModal';
import { SlHandbag } from 'react-icons/sl';
import CartPopup from '../../src/features/cart/popup-cart/CartPopup';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/redux/store';



interface Props {
    catalog?: any
}

const CatalogCarousel: React.FC<Props> = ({ catalog }) => {
    const [pages, setPages] = useState([])
    const [showModal, setShowModal] = useState({ show: false, item: null })
    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrowCircle />,
        prevArrow: <PrevArrowCircle />,
    })
    const [windowInfo, setWindowInfo] = useState({ width: 0, height: 0 })
    const [showCart, setShowCart] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [changecolor, setChangecolor] = useState(false)
    const [cart, setCart] = useState(false);
    const totalCount = useSelector((state: RootState) => state.cart.totalCount);



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

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowCart(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    //   const getItemCount = () => {
    //     let count = 0
    //     let totol = 0
    //   if (cartObj) {
    //       Object.keys(cartObj).forEach(shop => {
    //           count += cartObj[shop].length
    //           cartObj[shop].forEach((item: { cartQuantity: number; }) => {
    //               totol += item.cartQuantity
    //           })
    //       })
    //   }
    //   return `${count} (${totol})`
    // }

    const originalDate = new Date(catalog[0].expiredate)
    const formattedDate = new Date(originalDate).toLocaleDateString("en-GB")
    // console.log(formattedDate);

    const handleCart = () => {
        setShowCart(!showCart)
    }

    console.log(windowInfo)

    const handleClick = () => {
        // setCart(!cart)
    };
    const hnadleEnter = () => {
        setCart(true);
    };
    const handleLeave = () => {
        setCart(false);
    };
    return (
        <div className="catalog-page">
            <div className="catalog-header">
                <div className='flex justify-between mx-2 items-center py-4'>
                    <div className='ml-12 '><Link href="/"><Image src={logo} alt="LOGO" className='h-11 sm:h-9 md:h-11 w-auto'></Image> </Link></div>
                    <div className='text-center'>
                        <p>{catalog[0].title}</p>
                        <p>Expire Date -{formattedDate}</p>
                    </div>
                    <div
                        className="relative mr-2"
                        onMouseEnter={hnadleEnter}
                        onMouseLeave={handleLeave}
                    >
                        <button
                            className="border border-[#fff1ee] bg-[#fff1ee] rounded-full p-2"
                            onClick={handleClick}
                        >
                            <SlHandbag className="text-2xl text-[#ea2b0f]" />
                        </button>

                        {cart && <CartPopup setCart={setCart} />}
                        {totalCount > 0 && (
                            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                                {totalCount}
                            </div>
                        )}
                    </div>

                    {showCart &&
                        <NavbarCartModal ref={ref} />
                    }

                </div>
            </div>
            <div className="catalog-component">

                <Link href="/" className='fixed left-2 top-4'>
                    <button className="text-4xl  z-50 bg-[#8DC14F] rounded-full "><FaAngleLeft className='text-white' />
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
                <Draggable pages={pages} setShowModal={setShowModal} changecolor={changecolor} />

                {showModal.show && showModal.item && <AddToCartModal item={showModal.item} setChangecolor={setChangecolor}
                    handler={() => setShowModal(prevState => ({
                        ...prevState,
                        show: false
                    }))} />}

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

export function NextArrowCircle({ className, style, onClick }: any) {
    return (
        <div
            className={`${className}`}
            style={style}
            onClick={onClick}
            draggable={false}
        >
            <Image fill src={nextArrow} alt={""} />
        </div>
    );
}

export function PrevArrowCircle({ className, style, onClick }: any) {
    return (
        <div
            className={`${className}`}
            style={style}
            onClick={onClick}
            draggable={false}
        >
            <Image fill src={prevArrow} alt={""} />
        </div>
    );
}