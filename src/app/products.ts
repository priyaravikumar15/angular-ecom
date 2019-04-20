export interface productsinterface{
  sku:number;
  productname:string;
  productdescription:string;
  productimage:string;
  productcost:number;
}

export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}