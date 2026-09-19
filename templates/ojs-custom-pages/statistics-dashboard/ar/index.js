document.addEventListener('DOMContentLoaded', function () {
  const metrics = {
    publications: 0,
    countries: 0,
    views: 0
  };

  Object.entries(metrics).forEach(([key, value]) => {
    const el = document.querySelector('[data-stat="' + key + '"]');
    if (el) el.textContent = Number(value).toLocaleString();
  });
});
