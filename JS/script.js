    // 1. Misura Dinamica Navbar (SVG)
    const adjustNav = () => {
        const nav = document.querySelector('.navbar');
        const h = nav.offsetHeight;
        document.documentElement.style.setProperty('--nav-height', h + 'px');
    };
    window.addEventListener('load', adjustNav);
    window.addEventListener('resize', adjustNav);
    adjustNav();

    // 2. Apertura/Chiusura Card
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.card-content');

    const openCard = () => {
        overlay.classList.add('visible');
        setTimeout(() => { 
            overlay.classList.add('active'); 
            content.style.opacity = "1";
            document.body.style.overflow = 'hidden'; 
        }, 10);
    };

    const closeCard = () => {
        overlay.classList.remove('active');
        content.style.opacity = "0";
        setTimeout(() => { 
            overlay.classList.remove('visible'); 
            document.body.style.overflow = 'auto'; 
        }, 400);
    };

    document.getElementById('open-btn').onclick = openCard;
    document.getElementById('open-btn-mobile').onclick = openCard;
    document.getElementById('close-btn').onclick = closeCard;
    overlay.onclick = (e) => { if(e.target === overlay) closeCard(); };
    window.onkeydown = (e) => { if(e.key === "Escape") closeCard(); };


