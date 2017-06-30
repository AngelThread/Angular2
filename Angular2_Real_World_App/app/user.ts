
export class Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
}

export class User{


    name:string;
    email:string;
    phone: string;
    website:string;
    address = new Address();
    company;

}
