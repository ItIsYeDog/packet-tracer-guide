document.addEventListener('DOMContentLoaded', () => {
    const progressTracker = document.getElementById('progressTracker');
    const progressBar = document.getElementById('progressBar');
    const currentStepElement = document.getElementById('currentStep');
    const stepTitle = document.getElementById('stepTitle');
    const sections = document.querySelectorAll('section[data-step]');

    if (!sections.length) {
        if (progressTracker) progressTracker.style.display = 'none';
        return;
    }

    const initializeProgress = () => {
        if (sections[0] && stepTitle) {
            const firstSectionTitle = sections[0].querySelector('h2')?.textContent || '';
            stepTitle.textContent = firstSectionTitle;
            if (currentStepElement) {
                currentStepElement.textContent = `Trinn 1 av ${sections.length}`;
            }
            if (progressBar) {
                progressBar.style.width = `${(1 / sections.length) * 100}%`;
            }
        }
    };

    const updateProgress = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        let currentSectionIndex = 0;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionMiddle = rect.top + (rect.height / 2);

            if (sectionMiddle <= windowHeight * 0.6) {
                currentSectionIndex = index;
            }
        });

        if (progressBar) {
            const progress = ((currentSectionIndex + 1) / sections.length) * 100;
            progressBar.style.width = `${progress}%`;
        }

        if (stepTitle) {
            const newTitle = sections[currentSectionIndex].querySelector('h2')?.textContent || '';
            if (stepTitle.textContent !== newTitle) {
                stepTitle.style.opacity = '0';
                setTimeout(() => {
                    stepTitle.textContent = newTitle;
                    stepTitle.style.opacity = '1';
                }, 200);
            }
        }

        if (currentStepElement) {
            currentStepElement.textContent = `Trinn ${currentSectionIndex + 1} av ${sections.length}`;
        }
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    initializeProgress();
    setTimeout(updateProgress, 100);

    const toggleButton = progressTracker?.querySelector('button');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isVisible = progressTracker.style.transform !== 'translateY(100%)';
            progressTracker.style.transform = isVisible ? 'translateY(100%)' : 'translateY(0)';
            toggleButton.querySelector('svg').style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    }

    if (progressTracker) {
        progressTracker.style.transform = 'translateY(0)';
    }

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            updateProgress();
        }
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateProgress, 100);
    }, { passive: true });
});