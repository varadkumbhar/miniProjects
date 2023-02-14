export class candidate {
  candidateId: number;
  candidateName: string;
  batch: string;
  technology: string;
  phone: string;
  email: string;
  address: string;



  constructor() {
    this.candidateId = 0,
      this.candidateName = '',
      this.batch = '',
      this.technology = '',
      this.phone = '',
      this.email = '',
      this.address = ''
  }
}

export class student{
  studentId:number;
  studentName:string;
  contact:string;

  constructor(){
    this.studentId=0,
    this.studentName='',
    this.contact=''

  }
}
