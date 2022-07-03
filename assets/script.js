function ctaAction() {
    let x = document.getElementById("ctaAction");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

(function () {
    console.log(window.location.pathname)
    let number = '';
    switch (window.location.pathname) {
        case '/dubai.html':
            number = '97198765433';
            break;
        case '/bangalore.html':
            number = '919988776655';
            break;
        default:
            number = '919876543210';
    }

    let ctaLinks = document.getElementById('ctaAction').children;
    let mobileCta = ctaLinks.item(0);
    let whatsappCta = ctaLinks.item(1);

    mobileCta.setAttribute('href', `tel:+${number}`)
    whatsappCta.setAttribute('href', `https://wa.me/${number}`)

})()