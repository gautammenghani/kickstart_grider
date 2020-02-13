'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//WE ARE IN BROWSER AND METAMASK IS ENABLED
	web3 = new _web2.default(window.ethereum); //window IS ONLY AVAILABLE ON BROWSER
	window.ethereum.enable();
} else {
	//WE ARE ON SERVER || NO METAMASK AVAILALE
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/6237203e2312438aa4f0cc72a6123aa8');
	web3 = new _web2.default(provider);
}
exports.default = web3;
//THIS PROVIDER IS CONFIGURED FOR RINKEBY
//const web3 = new Web3(window.web3.currentProvider);
/*const web3 = new Web3(window.ethereum); //window IS ONLY AVAILABLE ON BROWSER
window.ethereum.enable();*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBQ1AsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWxELEFBQXlEO0FBRXhEO1FBQU8sQUFBSSxrQkFBSyxPQUZvRCxBQUVwRSxBQUFPLEFBQWdCLFVBRjZDLEFBQ3BFLENBQ2tDLEFBQ2xDO1FBQUEsQUFBTyxTQUFQLEFBQWdCLEFBQ2hCO0FBSkQsT0FLSSxBQUNIO0FBQ0E7S0FBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDaEIsQUFFRDtRQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2hCO0FBQ0Q7a0JBQUEsQUFBZTtBQUNmO0FBQ0E7QUFDQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkU6L215X2NvdXJzZXMvYmxvY2tjaGFpbi9raWNrc3RhcnQifQ==