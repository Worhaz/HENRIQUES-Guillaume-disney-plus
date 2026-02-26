const faqItems = document.querySelectorAll('.contenu_faq .faq_item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq_question');
  const icon = item.querySelector('.icon');

  if (!question) {
    return;
  }

  question.addEventListener('click', () => {
    const isActive = item.classList.toggle('active');

    if (icon) {
      icon.textContent = isActive ? '-' : '+';
    }
  });
});
