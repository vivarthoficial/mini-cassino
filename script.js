let balance = 100;

function spin() {
  const symbols = ["🍒", "🍋", "⭐", "💎", "7️⃣"];

  let r1 = symbols[Math.floor(Math.random() * symbols.length)];
  let r2 = symbols[Math.floor(Math.random() * symbols.length)];
  let r3 = symbols[Math.floor(Math.random() * symbols.length)];

  document.getElementById("r1").innerText = r1;
  document.getElementById("r2").innerText = r2;
  document.getElementById("r3").innerText = r3;

  balance -= 10;

  if (r1 === r2 && r2 === r3) {
    balance += 50;
    document.getElementById("result").innerText = "🎉 Você ganhou!";
  } else {
    document.getElementById("result").innerText = "😢 Tente novamente!";
  }

  if (balance <= 0) {
    balance = 0;
    document.getElementById("result").innerText = "💀 Saldo zerado!";
  }

  document.getElementById("balance").innerText = balance;
}
