import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'
const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x065F8A7b39BaB4b9599Eef4400633Ecec7BdDB0D'
);	
export default instance;