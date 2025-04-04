/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const basePrice = days * pricePerDay;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  if (days >= longTerm) {
    return basePrice - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return basePrice - mediumTermDiscount;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
