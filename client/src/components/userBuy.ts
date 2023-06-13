import {api} from "../utils/helper";

export default ()=>({
    buyList:[],
    init(){
        fetch(api.base+'/user-buy/1',{
            headers:{'Content-Type':'application/json'}
        }).then(response=>response.json()).then(response=>{
            this.buyList=response
        })
    }
})