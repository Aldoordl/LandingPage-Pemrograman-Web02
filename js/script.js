/**
 * Litera - Smart Book Discovery Platform
 * Interactive Frontend Logic (Redesigned)
 */

// Book Dataset
const BOOKS_DATA = [
    {
        id: 1,
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        category: "Pengembangan Diri",
        rating: 4.9,
        reviewsCount: 3840,
        pages: 346,
        year: 2019,
        coverGradient: "linear-gradient(135deg, #1a3d28 0%, #234d33 50%, #3a7a50 100%)",
        synopsis: "Penerapan filsafat Stoisisme kuno untuk menghadapi kecemasan, overthinking, dan ketidakpastian hidup di era modern dengan ketenangan batin.",
        keyTakeaway: "Kendalikan apa yang ada di bawah kendali kita, dan relakan apa yang berada di luar kendali kita.",
        availability: "Tersedia di 18 Perpustakaan Mitra & E-Book",
        tags: ["Stoisisme", "Mental Health", "Best Seller"]
    },
    {
        id: 2,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin (Uncle Bob)",
        category: "Teknologi & Koding",
        rating: 4.8,
        reviewsCount: 5210,
        pages: 464,
        year: 2008,
        coverGradient: "linear-gradient(135deg, #0f2419 0%, #14301f 50%, #2d6040 100%)",
        synopsis: "Panduan legendaris untuk para software engineer menulis kode yang bersih, mudah dipelihara, modular, dan memiliki standar profesionalisme tinggi.",
        keyTakeaway: "Kode yang baik adalah kode yang dapat dibaca dan dimengerti oleh manusia lain dengan mudah.",
        availability: "Tersedia di 24 Perpustakaan Kampus & Digital Copy",
        tags: ["Software Engineering", "Clean Code", "Best Practice"]
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Pengembangan Diri",
        rating: 4.9,
        reviewsCount: 8900,
        pages: 320,
        year: 2018,
        coverGradient: "linear-gradient(135deg, #44403c 0%, #292524 50%, #1c1917 100%)",
        synopsis: "Perubahan kecil yang memberikan hasil luar biasa. Cara mudah dan terbukti untuk membangun kebiasaan baik dan menghentikan kebiasaan buruk.",
        keyTakeaway: "Fokus pada sistem perbaikan 1% setiap hari daripada mengejar gol besar sesaat.",
        availability: "Tersedia di 35 Perpustakaan & Audiobook",
        tags: ["Produktivitas", "Kebiasaan", "Mindset"]
    },
    {
        id: 4,
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        category: "Fiksi & Sastra",
        rating: 5.0,
        reviewsCount: 6140,
        pages: 535,
        year: 1980,
        coverGradient: "linear-gradient(135deg, #292524 0%, #1c1917 50%, #0a0a0a 100%)",
        synopsis: "Kisah Minke di masa kolonial Hindia Belanda yang bergulat dengan pemikiran modern, cinta kepada Annelies, dan perjuangan kesetaraan hak pribumi.",
        keyTakeaway: "Seorang terpelajar harus bersikap adil sejak dalam pikiran, apalagi dalam perbuatan.",
        availability: "Tersedia di 42 Perpustakaan Mitra",
        tags: ["Sejarah", "Klasik", "Sastra Indonesia"]
    },
    {
        id: 5,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Bisnis & Finansial",
        rating: 4.8,
        reviewsCount: 4670,
        pages: 256,
        year: 2020,
        coverGradient: "linear-gradient(135deg, #234d33 0%, #2d6040 50%, #4a9963 100%)",
        synopsis: "Pelajaran abadi mengenai kekayaan, keserakahan, dan kebahagiaan. Kesuksesan finansial lebih berkaitan dengan perilaku daripada kecerdasan matematika.",
        keyTakeaway: "Menghasilkan uang membutuhkan risiko dan optimisme, namun mempertahankan uang membutuhkan kerendahan hati dan kehati-hatian.",
        availability: "Tersedia di 20 Perpustakaan Mitra & E-Book",
        tags: ["Investasi", "Psikologi", "Finansial"]
    },
    {
        id: 6,
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell & Peter Norvig",
        category: "Sains & Riset",
        rating: 4.7,
        reviewsCount: 2310,
        pages: 1152,
        year: 2021,
        coverGradient: "linear-gradient(135deg, #14301f 0%, #0f2419 50%, #0a0a0a 100%)",
        synopsis: "Buku rujukan utama akademis dunia mengenai kecerdasan buatan, machine learning, agen cerdas, dan penalaran probabilistik terkini.",
        keyTakeaway: "Desain agen cerdas yang mengambil tindakan optimal berdasarkan persepsi lingkungannya.",
        availability: "Tersedia di Perpustakaan Riset Kampus",
        tags: ["AI", "Machine Learning", "Akademik"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initBookExplorer();
    initBookModal();
    initFaqAccordion();
    initFormHandlers();
    initNavbarScroll();
});

// ===== Toast Helper =====
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

// ===== Mobile Menu =====
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

// ===== Book Explorer =====
let activeCategory = "Semua";
let searchQuery = "";

function initBookExplorer() {
    const bookContainer = document.getElementById("booksGrid");
    const searchInput = document.getElementById("bookSearchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (!bookContainer) return;

    renderBooks();

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => {
                b.classList.remove("active");
            });
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category") || "Semua";
            renderBooks();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderBooks();
        });
    }
}

function renderBooks() {
    const container = document.getElementById("booksGrid");
    const countDisplay = document.getElementById("booksFoundCount");
    if (!container) return;

    const filtered = BOOKS_DATA.filter(book => {
        const matchesCategory = activeCategory === "Semua" || book.category === activeCategory;
        const matchesSearch = !searchQuery ||
            book.title.toLowerCase().includes(searchQuery) ||
            book.author.toLowerCase().includes(searchQuery) ||
            book.category.toLowerCase().includes(searchQuery) ||
            book.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
    });

    if (countDisplay) {
        countDisplay.textContent = `Menampilkan ${filtered.length} buku`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state col-span-full text-center py-16 px-4">
                <div class="icon-wrap w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-100">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <h4 class="text-base font-bold text-green-900 mb-2 font-heading">Buku Tidak Ditemukan</h4>
                <p class="text-xs text-stone-500 max-w-sm mx-auto mb-5 leading-relaxed">Coba cari dengan kata kunci lain atau pilih kategori "Semua" untuk melihat seluruh koleksi.</p>
                <button onclick="resetSearchFilter()" class="btn-lime inline-flex items-center gap-2 px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-green-900 font-bold text-xs rounded-full transition-all cursor-pointer">
                    Reset Filter Pencarian
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(book => `
        <div class="book-card bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-green-200 transition-all duration-300 flex flex-col group">
            <!-- Cover -->
            <div class="book-cover h-48 p-4 flex flex-col justify-between text-white relative cursor-pointer overflow-hidden" style="background: ${book.coverGradient};" onclick="openBookModal(${book.id})">
                <div class="book-cover-top relative z-10 flex justify-between items-start">
                    <span class="book-category-tag px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider">${book.category}</span>
                    <span class="book-rating-tag px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-md text-xs font-bold text-amber-400">★ ${book.rating}</span>
                </div>
                <div class="book-cover-bottom relative z-10">
                    <p class="author text-[11px] opacity-80 mb-0.5">${book.author}</p>
                    <h4 class="title text-base font-bold leading-tight font-heading">${book.title}</h4>
                </div>
            </div>

            <!-- Body -->
            <div class="book-card-body p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="book-meta flex justify-between items-center text-[11px] text-stone-400 mb-2">
                        <span>${book.year} • ${book.pages} Hal</span>
                        <span class="available text-green-600 font-semibold flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>Tersedia</span>
                    </div>
                    <h3 class="book-card-title text-sm font-bold text-green-900 hover:text-green-600 transition-colors cursor-pointer truncate mb-1.5" onclick="openBookModal(${book.id})">${book.title}</h3>
                    <p class="book-card-synopsis text-xs text-stone-500 leading-relaxed line-clamp-2 mb-4">${book.synopsis}</p>
                </div>

                <div class="book-card-footer flex justify-between items-center pt-3 border-t border-stone-100 mt-auto">
                    <button onclick="openBookModal(${book.id})" class="book-detail-link text-xs font-semibold text-green-700 hover:text-lime-600 flex items-center gap-1 cursor-pointer transition-all">
                        Detail & Sinopsis
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    <button onclick="bookmarkBook('${book.title}')" class="book-bookmark-btn p-2 rounded-lg bg-stone-50 hover:bg-green-50 text-stone-400 hover:text-green-600 transition-colors cursor-pointer" title="Simpan ke Rak">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

function resetSearchFilter() {
    searchQuery = "";
    activeCategory = "Semua";
    const searchInput = document.getElementById("bookSearchInput");
    if (searchInput) searchInput.value = "";

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn, index) => {
        if (index === 0) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderBooks();
}

// ===== Modal Controller =====
function initBookModal() {
    const modal = document.getElementById("bookDetailModal");
    const closeBtn = document.getElementById("closeModalBtn");

    if (modal && closeBtn) {
        closeBtn.addEventListener("click", closeBookModal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeBookModal();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) {
                closeBookModal();
            }
        });
    }
}

function openBookModal(id) {
    const book = BOOKS_DATA.find(b => b.id === id);
    const modal = document.getElementById("bookDetailModal");
    if (!book || !modal) return;

    document.getElementById("modalBookTitle").textContent = book.title;
    document.getElementById("modalBookAuthor").textContent = book.author;
    document.getElementById("modalBookRating").textContent = `★ ${book.rating} (${book.reviewsCount.toLocaleString()} review)`;
    document.getElementById("modalBookCategory").textContent = book.category;
    document.getElementById("modalBookPages").textContent = `${book.pages} Halaman • Rilis ${book.year}`;
    document.getElementById("modalBookSynopsis").textContent = book.synopsis;
    document.getElementById("modalBookTakeaway").textContent = book.keyTakeaway;
    document.getElementById("modalBookAvailability").textContent = book.availability;

    const tagsContainer = document.getElementById("modalBookTags");
    if (tagsContainer) {
        tagsContainer.innerHTML = book.tags.map(tag => `
            <span class="modal-tag px-2.5 py-1 bg-stone-100 text-stone-600 text-[11px] rounded-lg font-medium">#${tag}</span>
        `).join("");
    }

    const modalCover = document.getElementById("modalBookCover");
    if (modalCover) {
        modalCover.style.background = book.coverGradient;
        modalCover.innerHTML = `
            <div>
                <span style="padding:0.25rem 0.5rem;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);border-radius:6px;font-size:0.625rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">
                    ${book.category}
                </span>
            </div>
            <div>
                <p style="font-size:0.8125rem;opacity:0.85;margin-bottom:0.25rem;">${book.author}</p>
                <h3 style="font-size:1.375rem;font-weight:800;line-height:1.2;">${book.title}</h3>
            </div>
        `;
    }

    const saveBtn = document.getElementById("modalSaveBtn");
    if (saveBtn) {
        saveBtn.onclick = () => {
            bookmarkBook(book.title);
        };
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeBookModal() {
    const modal = document.getElementById("bookDetailModal");
    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function bookmarkBook(title) {
    showToast(`"${title}" berhasil ditambahkan ke Rak Buku Anda!`);
}

// ===== FAQ Accordion =====
function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        if (header) {
            header.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                faqItems.forEach(other => {
                    other.classList.remove("active");
                });

                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });
}

// ===== Form Handlers =====
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

// ===== Sticky Navbar =====
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