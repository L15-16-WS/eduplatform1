document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for "Explore Courses" button and internal links
    const exploreBtn = document.getElementById('exploreCoursesBtn');
    const courseSection = document.querySelector('.featured-courses');

    if (exploreBtn && courseSection) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            courseSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active link highlighting for navigation (THIS WAS MISSING BEFORE!)
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Simple animation/interaction for featured courses (optional, for later) (THIS WAS ALSO MISSING BEFORE!)
    const courseCards = document.querySelectorAll('.course-card');
    if (courseCards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        courseCards.forEach((card, index) => {
            card.style.opacity = '0'; // Start invisible
            card.style.transform = 'translateY(20px)'; // Start slightly below
            card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`; // Add staggered transition
            observer.observe(card);
        });
    }
	// Update copyright year dynamically
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
