interface SinglePage {
    _id: string,
    page_image: string
}

interface SingleShop {
    distance: number;
    _id: string,
    shop_name: string
}

export interface Catalog {
    _id: string,
    shop_id: SingleShop,
    title: string,
    description?: string,
    expiredate?: string,
    status?: number,
    isDelete?: boolean,
    pages?: SinglePage[]
}

export interface Item{
    product_name:string,
    product_image:string,
    unit_price:string
    pages?: SinglePage[]
}

export interface Shop{
    
    shop_name:string,
    logo_img:string,
    address:any,
    address_line1:string,
    _id :string
    
}


// {
//     "_id": "63a4980419ff4fc78b5f6875",
//     "shop_id": "63a2c4b83e6401f7ab03c8b8",
//     "catelog_book_id": "63a497e619ff4fc78b5f683b",
//     "page_no": 1,
//     "page_setup_status": false,
//     "product_set_status": false,
//     "page_image": "http://apidev.marriextransfer.com/public/images/17c42af5-58ea-4603-a2d2-1265916c5323.jpeg",
//     "isDelete": false,
//     "items": [],
//     "createdAt": "2022-12-22T17:46:44.215Z",
//     "updatedAt": "2022-12-22T17:46:44.215Z",
//     "__v": 0
// }

// export interface Flyer {
//     title: string,
//     shopName: string,
//     distance?: string,
//     date?: string,
//     flyer: SaticImageData
// }

export interface Categories{
    // image: StaticImageData,
    name : string,
    mainCategories : array,
    subCategories : array,
}

export interface OneShop{
    shop_name:string,
    address:string,
    telephone:number,
}

// export interface Item{
//     image: StaticImageData,
//     name:string,
//     price:string
// }

export interface News{
    image: string,
    title:string,
    description:string
}

export interface City{
    image: StaticImageData,
    title:string,
    description:string,
    address:string,
    city:string,
}