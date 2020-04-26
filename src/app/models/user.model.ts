export interface UserInf{
    firebaseUID: string,
    name: string,
    cart?: Array<any>,
    address:{
        houseNo:number,
        street: string,
        city: string,
        pincode: number
    }
}