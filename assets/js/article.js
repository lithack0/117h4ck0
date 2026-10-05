const progress = document.getElementById("progress");

function updateReadingProgress() {
  if (!progress) return;

  const scrollTop = window.scrollY;
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage = scrollable > 0
    ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100))
    : 0;

  progress.style.width = `${percentage}%`;
}

updateReadingProgress();
window.addEventListener("scroll", updateReadingProgress, { passive: true });

document.querySelectorAll(".copy-code").forEach((button) => {
  button.addEventListener("click", async () => {
    const code = button.closest(".code-block")?.querySelector("code");
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.innerText);
      const original = button.textContent;
      button.textContent = "COPIED";

      setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      button.textContent = "FAILED";
      setTimeout(() => {
        button.textContent = "COPY";
      }, 1400);
    }
  });
});
