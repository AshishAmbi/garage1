function calculateCost() {
  let vehicle = document.getElementById("vehicle").value;
  let service = document.getElementById("service").value;
  let pickup = document.getElementById("pickup").checked;
  let summary = document.getElementById("summary");

  if (!vehicle || !service) {
    summary.innerHTML = "⚠ Select all fields";
    return;
  }

  let base = vehicle == 2 ? 1000 : 3000;
  let pickupCharge = pickup ? 500 : 0;

  summary.innerHTML =
    `💰 Estimated Cost: ₹${base + pickupCharge}`;
}
