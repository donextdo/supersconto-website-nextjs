import React, {useEffect, useState} from 'react';
import requests from "../../utils/request";
import SingleItemPreview from "../../src/components/Catalog/SingleItemPreview";
import Slider from "../../src/components/Utils/Slider";

interface Props {
    catalog?: any
}

const CatalogCarousel: React.FC<Props> = ({catalog}) => {
    const [pages, setPages] = useState([])

    useEffect(() => {
        console.log(catalog);
        if (catalog.length > 0) {
            setPages(catalog[0].pages)
        }
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    pages.length > 0 && pages.map((item: any, index) => (
                        <div key={`page-slider-${index}`}>
                            {item.items && item.items.length > 0 && <SingleItemPreview
                                coordinates={item.items.map((it: any) => ({
                                    ...it.coordinates,
                                    id: it._id,
                                    name: it.product_name
                                })).flatMap((a: any) => a)}
                                strokeImageUrl={item.page_image}
                                height={600} width={400}
                                handleSelection={({itemId, itemName}) => {
                                    const cartItems: [any] = JSON.parse(localStorage.getItem("cartItems")!) ?? []
                                    cartItems.push(itemId)
                                    window.alert(`${itemName} added to your cart!`)
                                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                                }}
                                imageHeight={item?.items[0]?.coordinates?.imageHeight}
                                imageWidth={item?.items[0]?.coordinates?.imageWidth}/>}
                        </div>
                    ))
                }
            </Slider>
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