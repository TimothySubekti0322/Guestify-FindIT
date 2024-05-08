export const formatCurrency = (
  amount,
  prefix = "Rp",
  includeLastTwoDigits = false,
  includeSpace = true
) => {
  // Convert amount to string and split into parts (before and after decimal)
  const parts = amount.toString().split(".");
  let integerPart = parts[0];

  // Add commas to separate thousands
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Format the prefix
  let formattedPrefix = prefix;
  if (includeSpace) {
    formattedPrefix += " ";
  }

  // Append ",00" to the integer part
  if (includeLastTwoDigits) {
    integerPart += ",00";
  }

  // Combine integer and decimal parts
  let formattedAmount = formattedPrefix + integerPart;

  return formattedAmount;
};

export const getPercentage = (num, total) => {
  if (total === 0) {
    return "0.00%";
  }
  return `${((num / total) * 100).toFixed(2)}%`;
};
