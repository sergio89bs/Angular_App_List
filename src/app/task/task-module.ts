export class Task{
    name:string;
    description:string;
  
    constructor(cName = '',cDesc = ''){
      this.name = cName
      this.description = cDesc
    }
}