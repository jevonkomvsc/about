document.addEventListener("DOMContentLoaded", function() {
    // mobile menu toggle
    const menutoggle = document.querySelector('.menu-toggle');
    const navmenu = document.querySelector('nav ul');

    menutoggle.addEventListener('click', function() {
        navmenu.classList.toggle('active');
        menutoggle.querySelector('i').classList.toggle('fa-bars');
        menutoggle.querySelector('i').classList.toggle('fa-times');
    });

    // close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            navmenu.classList.remove('active');
            menutoggle.querySelector('i').classList.add('fa-bars');
            menutoggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // text typing effect
    const text = [
        "Frontend Developer",
        "Ui/ux Designer",
        "Web Consultant",
    ];
    let textindex = 0;
    let charindex = 0;
    let isdeleting = false;
    let typingdelay = 100;

    function type() {
    const currenttext = text[textindex];
    const typingelement = document.querySelector(".typing-text");

    if (isdeleting) {
        if (charindex > 0) {
            charindex--;
            typingelement.textContent = currenttext.substring(0, charindex);
            typingdelay = 100;
        } else {
            // selesai menghapus, pindah ke kata berikutnya
            isdeleting = false;
            textindex = (textindex + 1) % text.length;
            typingdelay = 500;
        }
    } else {
        if (charindex < currenttext.length) {
            charindex++;
            typingelement.textContent = currenttext.substring(0, charindex);
            typingdelay = 100;
        } else {
            // selesai mengetik, mulai menghapus setelah delay
            isdeleting = true;
            typingdelay = 1500;
        }
    }

    setTimeout(type, typingdelay);
}


    // start the typing effect after a delay
    setTimeout(type, 1000);

    // smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetid = this.getAttribute('href');
            if (targetid === '#') return;

            const targetElement = document.querySelector(targetid);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
