export class clientClass{
  clientId: number;
  clientName: string;
  businessName: string;
  contactPerson: string;
  contactNo: string;
  altContactNo: string;
  email: string;
  createdDate: Date;
  logo: any;

  constructor(){
    debugger;
  this.clientId= 0;
  this.clientName= '';
  this.businessName= '';
  this.contactPerson= '';
  this.contactNo= '';
  this.altContactNo= '';
  this.email= '';
  this.createdDate= new Date();
  this.logo= null;
  }
}
