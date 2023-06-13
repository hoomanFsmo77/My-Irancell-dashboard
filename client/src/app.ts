import './assets/app.scss'
import Alpine from 'alpinejs'
import userInfo from "./components/userInfo";
import recommendPacket from "./components/recommendPacket";
import chart from "./components/chart";
import activeService from "./components/activeService";
import userBuy from "./components/userBuy";
// @ts-ignore
window.Alpine = Alpine
Alpine.data('userInfo',userInfo)
Alpine.data('recommendPacket',recommendPacket)
Alpine.data('chart',chart)
Alpine.data('activeService',activeService)
Alpine.data('userBuy',userBuy)
Alpine.start()

