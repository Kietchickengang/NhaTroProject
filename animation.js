document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".cta").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Đổi biểu tượng nút
  const btn = document.querySelector(".toggle-dark");
  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀️ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}
