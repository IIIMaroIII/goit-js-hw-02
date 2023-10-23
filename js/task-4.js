function getShippingCost(country) {
  const china = 100;
  const chile = 250;
  const australia = 170;
  const jamaica = 120;
  switch (country) {
    case "Australia":
      console.log(`Shipping to ${country} will cost ${australia}`);
      break;
    case "China":
      console.log(`Shipping to ${country} will cost ${china}`);
      break;
    case "Chile":
      console.log(`Shipping to ${country} will cost ${chile}`);
      break;
    case "Jamaica":
      console.log(`Shipping to ${country} will cost ${jamaica}`);
      break;
    default:
      console.log(`Sorry, there is no delivery to your country`);
      break;
  }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"