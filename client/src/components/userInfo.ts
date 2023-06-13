import {api} from "../utils/helper";

export default ()=>({
    fullname:'',
    phone:'',
    profile:'',
    charge:'',
   init(){
        fetch(api.base+'/user',{
            headers:{
                Authorization:api.key,
                'Content-Type':'application/json'
            }
        }).then(response=>response.json()).then(response=>{
            this.fullname=`${response.firstname} ${response.lastname}`
            this.phone=response.phone
            this.profile=response.profile
            this.charge=response.charge +'تومان'
        })
    }
})