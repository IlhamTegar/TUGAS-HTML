function scrollToNextSection() {
    var currentSection = document.querySelector('.about-container:target');
    var nextSection = currentSection.nextElementSibling;

    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
    
}
