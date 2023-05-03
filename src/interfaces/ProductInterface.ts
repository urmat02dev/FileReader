export interface IProduct  {
    title:string
    category?:string
    description:string
    id?: number
    image: string | any
    price: number
    rating?:{
        count?: number
        rate?: number
    }

}