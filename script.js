window.onload = function () {
  // Tombol Scroll to Top
  const btnTop = document.createElement('button');
  btnTop.innerText = "🔝";
  btnTop.id = "btnTop";
  document.body.appendChild(btnTop);

  btnTop.style.position = "fixed";
  btnTop.style.bottom = "30px";
  btnTop.style.right = "30px";
  btnTop.style.display = "none";
  btnTop.style.padding = "10px";
  btnTop.style.fontSize = "20px";
  btnTop.style.background = "#333";
  btnTop.style.color = "#fff";
  btnTop.style.border = "none";
  btnTop.style.borderRadius = "50%";
  btnTop.style.cursor = "pointer";
  btnTop.style.zIndex = "1000";

  window.addEventListener('scroll', () => {
    btnTop.style.display = window.scrollY > 200 ? "block" : "none";
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Tombol Dark Mode (pakai yang di HTML)
  const toggle = document.getElementById('darkModeToggle');
  toggle.classList.add('dark-mode-btn');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.innerText = document.body.classList.contains('dark') ? "☀️" : "🌙";
  });
};
