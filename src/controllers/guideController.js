const guides = [
    { url: '/program-gjennomgang', title: 'Program Gjennomgang', totalSteps: 3 },
    { url: '/lan', title: 'LAN Oppsett', totalSteps: 5 },
    { url: '/dns', title: 'DNS Server', totalSteps: 7 },
    { url: '/dhcp', title: 'DHCP Server', totalSteps: 6 },
    { url: '/iot', title: 'IoT Nettverk', totalSteps: 5 }
];

function getNavigationData(currentPath) {
    const currentIndex = guides.findIndex(guide => guide.url === currentPath);
    const currentGuide = guides[currentIndex];
    
    return {
        prevGuide: currentIndex > 0 ? guides[currentIndex - 1] : null,
        nextGuide: currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null,
        currentStep: 1,  // Default to 1, can be overridden
        totalSteps: currentGuide ? currentGuide.totalSteps : null
    };
}

exports.getIndex = (req, res) => {
    const navigationData = getNavigationData('/');
    res.render('pages/index', navigationData);
};

exports.getLanPage = (req, res) => {
    const navigationData = getNavigationData('/lan');
    res.render('pages/lan', navigationData);
};

exports.getDnsPage = (req, res) => {
    const navigationData = getNavigationData('/dns');
    res.render('pages/dns', navigationData);
};

exports.getDhcpPage = (req, res) => {
    const navigationData = getNavigationData('/dhcp');
    res.render('pages/dhcp', navigationData);
};

exports.getIotPage = (req, res) => {
    const navigationData = getNavigationData('/iot');
    res.render('pages/iot', navigationData);
};

exports.getGlossaryPage = (req, res) => {
    // Glossary doesn't need navigation
    res.render('pages/glossary', { 
        prevGuide: null,
        nextGuide: null,
        currentStep: null,
        totalSteps: null
    });
};

exports.getAboutPage = (req, res) => {
    // About page doesn't need navigation
    res.render('pages/about', {
        prevGuide: null,
        nextGuide: null,
        currentStep: null,
        totalSteps: null
    });
};

exports.getProgramGjennomgangPage = (req, res) => {
    const navigationData = getNavigationData('/program-gjennomgang');
    res.render('pages/program-gjennomgang', navigationData);
};