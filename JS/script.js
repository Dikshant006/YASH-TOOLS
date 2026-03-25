document.addEventListener("DOMContentLoaded", () => {

    // ================= HERO SLIDER =================
    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        if (slides[index]) slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000);
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
        });
    }

    // ================= PRODUCTS PAGINATION =================
    const grid = document.getElementById("productsGrid");
    const paginationEl = document.getElementById("pagination");
    const viewSelect = document.querySelector(".view-select");

    // Only run if products page elements exist
    if (grid && paginationEl && typeof allProducts !== "undefined") {
        let currentPage = 1;
        let perPage = 12;

        function renderProducts() {
            const total = allProducts.length;
            const totalPages = Math.ceil(total / perPage);
            if (currentPage > totalPages) currentPage = 1;

            const start = (currentPage - 1) * perPage;
            const end = start + perPage;
            const visible = allProducts.slice(start, end);

            // Render product cards
            grid.innerHTML = visible.map(p => `
                <div class="p-card">
                    <div class="p-img">
                        <img src="${p.image}" alt="${p.name}" loading="lazy">
                    </div>
                    <h4>${p.name}</h4>
                    <a href="${p.link}" class="read-btn">View Details</a>
                </div>
            `).join("");

            // Render pagination buttons
            paginationEl.innerHTML = "";
            for (let i = 1; i <= totalPages; i++) {
                const a = document.createElement("a");
                a.textContent = i;
                a.href = "#";
                if (i === currentPage) a.classList.add("active");
                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    currentPage = i;
                    renderProducts();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
                paginationEl.appendChild(a);
            }
        }

        // View select change (12 / 24 / 36)
        if (viewSelect) {
            viewSelect.addEventListener("change", () => {
                perPage = parseInt(viewSelect.value);
                currentPage = 1;
                renderProducts();
            });
        }

        // Initial render
        renderProducts();
    }

    // ================= RELATED PRODUCT SLIDER =================
    const track = document.querySelector(".slider-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (track && prevBtn && nextBtn) {
        let index = 0;
        const cards = document.querySelectorAll(".related-card");
        const totalCards = cards.length;
        const cardWidth = (cards[0]?.offsetWidth || cards[0]?.getBoundingClientRect().width || 220) + 20;

        function updateSlider() {
            if (index >= totalCards) index = 0;
            if (index < 0) index = totalCards - 1;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        nextBtn.addEventListener("click", () => { index++; updateSlider(); });
        prevBtn.addEventListener("click", () => { index--; updateSlider(); });

        let auto = setInterval(() => { index++; updateSlider(); }, 3000);
        track.addEventListener("mouseenter", () => clearInterval(auto));
        track.addEventListener("mouseleave", () => {
            auto = setInterval(() => { index++; updateSlider(); }, 3000);
        });
    }

    // ================= SIDEBAR TOGGLE =================
    document.querySelectorAll(".toggle-icon").forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = icon.closest(".has-dropdown");
            if (parent) parent.classList.toggle("active");
        });
    });

    // ================= PRODUCT IMAGE SLIDER =================
    let currentPos = 0;

    window.moveSlide = function (dir) {
        const slider = document.getElementById("productSlider");
        if (!slider) return;
        const images = slider.querySelectorAll("img");
        if (images.length === 0) return;
        currentPos += dir;
        if (currentPos >= images.length) currentPos = 0;
        if (currentPos < 0) currentPos = images.length - 1;
        slider.style.transform = `translateX(-${currentPos * 100}%)`;
    };

    // ================= IMAGE ZOOM =================
    window.zoomImage = function () {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("imgFull");
        const slider = document.getElementById("productSlider");
        if (modal && slider && modalImg) {
            const images = slider.querySelectorAll("img");
            if (images[currentPos]) {
                modal.style.display = "flex";
                modalImg.src = images[currentPos].src;
            }
        }
    };

    window.closeZoom = function () {
        const modal = document.getElementById("imageModal");
        if (modal) modal.style.display = "none";
    };

    // ================= PRODUCT TABS =================
    window.openTab = function (evt, tabName) {
        document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        const target = document.getElementById(tabName);
        if (target) target.style.display = "block";
        evt.currentTarget.classList.add("active");
    };

    const desc = document.getElementById("desc");
    if (desc) desc.style.display = "block";

    // ================= VIDEO SLIDER =================
    let currentVideo = 0;
    const vSlides = document.querySelectorAll(".video-slide");

    window.changeVideo = function (dir) {
        if (vSlides.length === 0) return;
        vSlides[currentVideo].classList.remove("active");
        currentVideo += dir;
        if (currentVideo >= vSlides.length) currentVideo = 0;
        if (currentVideo < 0) currentVideo = vSlides.length - 1;
        vSlides[currentVideo].classList.add("active");
    };

    // ================= MOBILE MENU =================
    const btn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".main-menu");
    if (btn && menu) {
        btn.addEventListener("click", () => menu.classList.toggle("active"));
    }

    // ================= INQUIRY MODAL =================
    const inquiryModal = document.getElementById("inquiryModal");
    const closeBtn = document.querySelector(".close-btn");

    if (inquiryModal) {
        setTimeout(() => { inquiryModal.style.display = "flex"; }, 4000);
    }

    if (closeBtn && inquiryModal) {
        closeBtn.addEventListener("click", () => { inquiryModal.style.display = "none"; });
    }

    window.addEventListener("click", function (e) {
        if (inquiryModal && e.target === inquiryModal) {
            inquiryModal.style.display = "none";
        }
        const zoomModal = document.getElementById("imageModal");
        if (zoomModal && e.target === zoomModal) {
            zoomModal.style.display = "none";
        }
    });

});

// ================= SOCIAL HTML FETCH =================
function loadSocial() {
    const isInSubFolder = window.location.pathname.includes("/pages/");
    const path = isInSubFolder ? "../social.html" : "social.html";
    fetch(path)
        .then(res => { if (!res.ok) throw new Error("social.html load failed"); return res.text(); })
        .then(data => { document.body.insertAdjacentHTML("beforeend", data); })
        .catch(err => console.error("Social fetch error:", err));
}

loadSocial();

// ================= PAGINATION ACTIVE (for static HTML pages) =================
const pageLinks = document.querySelectorAll(".pagination a");
pageLinks.forEach(link => {
    link.classList.remove("active");
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});