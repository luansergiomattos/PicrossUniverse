export default function clearInputOnFocus() {
  const inputGroup = document.querySelectorAll(`[data-input]`);

  inputGroup.forEach(input => {
    input.addEventListener('focus', () => {
      if (input.value) {
        input.value = '';
        // input.blur();
        input.focus();
      }
    });
  });
}
