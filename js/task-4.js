// function getShippingCost(country) {
//   const china = 100;
//   const chile = 250;
//   const australia = 170;
//   const jamaica = 120;
//   switch (country) {
//     case "Australia":
//       console.log(`Shipping to ${country} will cost ${australia}`);
//       break;
//     case "China":
//       console.log(`Shipping to ${country} will cost ${china}`);
//       break;
//     case "Chile":
//       console.log(`Shipping to ${country} will cost ${chile}`);
//       break;
//     case "Jamaica":
//       console.log(`Shipping to ${country} will cost ${jamaica}`);
//       break;
//     default:
//       console.log(`Sorry, there is no delivery to your country`);
//       break;
//   }
// }
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function calculateEngravingPrice(message, pricePerWord) {
//   const splitMessage = message.split(" ").length * pricePerWord;
//   console.log(splitMessage);
// }

// calculateEngravingPrice("JavaScript is in my blood", 30);
// calculateEngravingPrice("JavaScript is in my blood", 20);

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так,
//   щоб вона виконувала пошук значення value у масиві array
//    і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до
// елемента зі значенням value включно, якщо такий елемент
// є в array

// function getSlice(array, value) {
//   if (array.indexOf(value) >= 0) {
//     const newArr = array
//       .slice(0, array.indexOf(value))
//       .concat([array[array.indexOf(value)]]);
//     return newArr;
//   } else {
//     return [];
//   }
// }
// getSlice(["Mango", "Poly", "Ajax"], "Jacob");
// getSlice(["Mango", "Poly", "Ajax"], "Poly");
// getSlice(["Mango", "Poly", "Ajax"], "Mango");
// getSlice(["Mango", "Poly", "Ajax"], "Ajax");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//     console.log(numbers);
//   }
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     console.log(order[i]);
//     total += order[i];
//   }
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     } else {
//       arr;
//     }
//   }
//   return arr;
// }
// console.log(arr);
// getEvenNumbers(2, 5);
// getEvenNumbers(6, 12);

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item} is available to order!`);
//     console.log(item.toLowerCase());
//   } else {
//     console.log(`Sorry! We are out of stock!`);
//   }
// }
// checkStorage(["apple", "plum", "pear"], "pLuM");

// function getCommonElements(array1, array2) {
//   const newArr = [];
//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   console.log(newArr);
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function calculateTotalPrice(order) {
//   let totalAmount = 0;
//   for (let number of order) {
//     totalAmount += number;
//   }
//   console.log(totalAmount);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
function createReversedArray() {
  console.log(arguments);
  const args = Array.from(arguments).toReversed();
  console.log(args);
}

createReversedArray(12, 85, 37, 4);
