import {api} from "../utils/helper";

export default ()=>({
    packetList:[],
     init(){
        fetch(api.base+'/recommend-packs/1',{
            headers:{'Content-Type':'application/json'}
        }).then(response=>response.json()).then(response=>{
            this.packetList=response
        })
    }
})