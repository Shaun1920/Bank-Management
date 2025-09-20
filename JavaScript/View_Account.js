

// Generate random data for demo
function randomName() {
  const first = ["Amit", "Sneha", "Rohan", "Priya", "Arjun", "Neha", "Kiran", "Meera"];
  const last = ["Sharma", "Patel", "Kumar", "Reddy", "Singh", "Iyer", "Joshi", "Desai"];
  return first[Math.floor(Math.random()*first.length)] + " " + last[Math.floor(Math.random()*last.length)];
}

function randomSSN() {
  return Math.floor(1000000 + Math.random()*9000000); // 7 digits
}

function randomIFSC() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for(let i=0; i<4; i++) code += chars.charAt(Math.floor(Math.random()*chars.length));
  code += "0";
  for(let i=0; i<5; i++) code += Math.floor(Math.random()*10);
  return code; // 10 characters
}

function randomAccNum() {
  return Math.floor(1000000000 + Math.random()*9000000000); // 10 digits
}

function randomBalance() {
  return (Math.random()*100000).toFixed(2); // up to 5 digits + 2 decimals
}

// Fill data on load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("custName").textContent = randomName();
  document.getElementById("custSSN").textContent = randomSSN();
  document.getElementById("custIFSC").textContent = randomIFSC();
  document.getElementById("custAccNum").textContent = randomAccNum();
  document.getElementById("custBalance").textContent = "₹ " + randomBalance();
});
