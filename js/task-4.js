'use strict';

function getShippingCost(country) {
  const outputStart = 'Shipping to';
  const outputEnd = 'credits';
  switch (country) {
    case 'China':
      return '${outputStart} ${country} will cost 100 ${outputEnd}';
    case 'Chile':
      return '${outputStart} ${country} will cost 250 ${outputEnd}';
    case 'Australia':
      return '${outputStart} ${country} will cost 170 ${outputEnd}';
    case 'Jamaica':
      return '${outputStart} ${country} will cost 120 ${outputEnd}';
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"