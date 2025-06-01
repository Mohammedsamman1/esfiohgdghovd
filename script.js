// تأخير عرض العناصر بشكل متسلسل
document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
  