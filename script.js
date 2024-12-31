document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => observer.observe(section));
});

  