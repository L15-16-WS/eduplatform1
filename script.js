document.addEventListener('DOMContentLoaded', () => {
    const exploreCoursesBtn = document.getElementById('exploreCoursesBtn');

    if (exploreCoursesBtn) {
        exploreCoursesBtn.addEventListener('click', () => {
            // In a real application, this would navigate to the courses page
            window.location.href = 'courses.html';
        });
    }

    // Active link highlighting for navigation
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Simple animation/interaction for featured courses (optional, for later)
    const courseCards = document.querySelectorAll('.course-card');
    if (courseCards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        courseCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }
});
