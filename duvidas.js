const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.classList.toggle('show'); // Toggle the 'show' class to show/hide the answer
  });
});