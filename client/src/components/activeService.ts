import {api} from "../utils/helper";

export default ()=>({
    activeServiceData:[],
    init(){
        fetch(api.base+'/services/1',{
            headers:{'Content-Type':'application/json'}
        }).then(response=>response.json()).then(response=>{
            this.activeServiceData=response
        })
    }
})