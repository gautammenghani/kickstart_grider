import Web3 from 'web3';
let web3;
if(typeof window !== 'undefined' && typeof window.web3!=='undefined'){
	//WE ARE IN BROWSER AND METAMASK IS ENABLED
	web3 = new Web3(window.ethereum); //window IS ONLY AVAILABLE ON BROWSER
	window.ethereum.enable();
}
else{
	//WE ARE ON SERVER || NO METAMASK AVAILALE
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/6237203e2312438aa4f0cc72a6123aa8'
	);
	web3 = new Web3(provider);
}
export default web3;
//THIS PROVIDER IS CONFIGURED FOR RINKEBY
//const web3 = new Web3(window.web3.currentProvider);
/*const web3 = new Web3(window.ethereum); //window IS ONLY AVAILABLE ON BROWSER
window.ethereum.enable();*/
