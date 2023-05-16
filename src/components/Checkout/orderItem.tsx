export interface OrderItem {
    userId: string | null;
    orderId:string | null;
    totalprice: number;
    date:string;
    status:string;
    items: {
      productDetails: any;
      
      orderquantity: number;
      
      productId:string;
    }[];
  }