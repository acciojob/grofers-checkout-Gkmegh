const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all the price elements
  const priceElements = document.querySelectorAll('.price');

  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  // Create a new row for the total price
  const table = document.querySelector('table');
  
  // Check if the total price row already exists, and remove it if it does
  const existingTotalRow = table.querySelector('.total-row');
  if (existingTotalRow) {
    table.removeChild(existingTotalRow);
  }
  
  const newRow = table.insertRow();
  newRow.className = 'total-row'; // Add a class to identify the total row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = '<strong>Total Price:</strong>';
  cell2.innerHTML = '<strong>' + totalPrice + '</strong>';
  
  // Remove the click event listener after calculating and displaying the total
  getSumBtn.removeEventListener("click", getSum);
};

getSumBtn.addEventListener("click", getSum);

