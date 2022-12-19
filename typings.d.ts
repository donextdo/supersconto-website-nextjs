export interface Flyer {
    title: string,
    shopName: string,
    distance?: string,
    date?: string,
    flyer: SaticImageData
}

export interface Category{
    image: StaticImageData,
    name : string,
}

export interface Shop{
    image: StaticImageData,
    name:string,
    address:string
}

export interface Item{
    image: StaticImageData,
    name:string,
    price:string
}

export interface News{
    image: StaticImageData,
    title:string,
    description:string
}

export interface City{
    image: StaticImageData,
    title:string,
    description:string
}