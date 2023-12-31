import {api} from "../utils/helper";
import initChart from "../utils/chart";
export default ()=>({
    init(){
        fetch(api.base+'/chart/1',{
            headers:{'Content-Type':'application/json'}
        }).then(response=>response.json()).then(response=>{
            const el=this.$refs.myChart
            initChart(JSON.parse(response[0].labels),JSON.parse(response[0].data),el)
        })
    }
})