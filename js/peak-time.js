const button = document.querySelector('.voting-result-button');
/* .voting-result가 여러개 */
const results = document.querySelectorAll('.voting-result');

button.addEventListener("click", () => {
  results.forEach(result => {
    result.removeAttribute('hidden');
  });
});