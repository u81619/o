function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showLogin() {
  document.getElementById("adminLogin").style.display = "block";
}

function checkPassword() {
  const pass = document.getElementById("adminPassword").value;
  if (pass === "aa20132013") {
    document.getElementById("addGameForm").style.display = "block";
    document.getElementById("adminLogin").style.display = "none";
    alert("تم الدخول كإدمن");
  } else {
    alert("كلمة المرور غير صحيحة!");
  }
}

function addGame() {
  const title = document.getElementById("gameTitle").value;
  const image = document.getElementById("gameImage").value;
  const link = document.getElementById("gameLink").value;

  if (!title || !image || !link) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  const grid = document.getElementById("gameGrid");
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <a href="${link}" target="_blank">
      <img src="${image}" alt="${title}" />
      <h2>${title}</h2>
    </a>
  `;

  grid.appendChild(card);

  // تنظيف الحقول
  document.getElementById("gameTitle").value = "";
  document.getElementById("gameImage").value = "";
  document.getElementById("gameLink").value = "";
}