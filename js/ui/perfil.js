// pages/perfil.html — toggle switch interactions
document.querySelectorAll('.toggle-checkbox').forEach((toggle) => {
  toggle.addEventListener('change', function () {
    if (this.checked) {
      this.classList.replace('right-full', 'right-0');
      this.classList.replace('border-surface-container-highest', 'border-primary');
      this.nextElementSibling.classList.replace('bg-surface-container-highest', 'bg-primary');
    } else {
      this.classList.replace('right-0', 'right-full');
      this.classList.replace('border-primary', 'border-surface-container-highest');
      this.nextElementSibling.classList.replace('bg-primary', 'bg-surface-container-highest');
    }
  });
  if (!toggle.checked) {
    toggle.classList.add('right-full');
    toggle.classList.remove('right-0', 'border-primary');
    toggle.nextElementSibling.classList.remove('bg-primary');
  }
});