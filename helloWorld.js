import { LightningElement,track} from 'lwc';

export default class HelloWorld extends LightningElement {
 
    userList=["A","B","C"] 
    fullname="zero to hero"
    title="lwc"
    changeHandler(event) // in event palce we can give any name
    {
        this.title=event.target.value
    }
    
}