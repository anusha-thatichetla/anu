import { LightningElement,track} from 'lwc';

export default class HelloWorld extends LightningElement {
  /*  name //undefined
    age=23
    fullname="salesforce troop"
    showData =false
    details ={
        name:"dummy",
        place:"nellore"
        
    } */
    userList=["A","B","C"] 
    fullname="zero to hero"
    title="lwc"
    changeHandler(event) // in event palce we can give any name
    {
        this.title=event.target.value
    }
     address ={
        city:'melbourne',
        postcode:3008,
        country:'australia'   
    }
    TrackHandler(event){
        this.address={...this.address,"city":event.target.value}
    } 
/**getter example  **/
    users = ["anu", "hanu", "mummy"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiply(){
        return this.num1*this.num2
    }

}