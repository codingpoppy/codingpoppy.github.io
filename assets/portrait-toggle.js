const portraitButton = document.querySelector('.portrait-toggle');

if (portraitButton) {
  const photo = portraitButton.querySelector('.portrait-photo');
  const illustration = portraitButton.querySelector('.portrait-illustration');

  portraitButton.addEventListener('click', () => {
    const showIllustration = portraitButton.getAttribute('aria-pressed') !== 'true';
    photo.hidden = showIllustration;
    illustration.hidden = !showIllustration;
    portraitButton.setAttribute('aria-pressed', String(showIllustration));
    portraitButton.title = showIllustration ? 'Back to my photo' : 'Meet my alter ego';
  });
}
