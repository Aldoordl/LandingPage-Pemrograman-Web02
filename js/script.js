document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initFormHandlers();
    initNavbarScroll();
});

function showToast(message, type = "success") {
    const toast = document.getElementById("toastNotification");
    const toastMsg = document.getElementById("toastMessage");
    const toastIcon = document.getElementById("toastIcon");

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;

    if (type === "success") {
        toastIcon.innerHTML = `
            <svg style="width:18px;height:18px;color:#2d6040;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
        `;
    } else {
        toastIcon.innerHTML = `
            <svg style="width:18px;height:18px;color:#234d33;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        `;
    }

    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3800);
}

function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const links = menu ? menu.querySelectorAll("a") : [];

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
        });

        links.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("open");
            });
        });
    }
}

function initFormHandlers() {
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector("input[type='email']");
            const email = emailInput ? emailInput.value : "";
            showToast(`Terima kasih! Undangan akses Beta Litera telah dikirim ke ${email}.`);
            newsletterForm.reset();
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nama = document.getElementById("contactNama")?.value || "Pengguna";
            showToast(`Halo ${nama}, pesan Anda berhasil dikirim! Tim Litera akan membalas segera.`);
            contactForm.reset();
        });
    }

    const downloadBtns = document.querySelectorAll(".app-download-trigger");
    downloadBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showToast("Memulai unduhan aplikasi Litera (Demo Prototype v2.0)...", "info");
        });
    });
}

function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}