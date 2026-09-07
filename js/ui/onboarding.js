// pages/onboarding.html — interaction: genre chips toggle
document.querySelectorAll('button.rounded-full').forEach((chip) => {
  chip.addEventListener('click', () => {
    chip.classList.toggle('chip-active');
  });
});