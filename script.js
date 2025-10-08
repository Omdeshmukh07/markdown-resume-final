// Dark/Light mode toggle
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Show/Hide sections
const toggleButtons = document.querySelectorAll('.toggleSection');
toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target + "List";
    const section = document.getElementById(target);
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});

// Copy email to clipboard
const copyBtn = document.getElementById('copyEmail');
copyBtn.addEventListener('click', () => {
  const email = document.getElementById('email').textContent;
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied to clipboard!");
  });
});
