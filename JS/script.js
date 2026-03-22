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
        showSlide(currentSlide); // ✅ Initial slide show
        setInterval(nextSlide, 5000);

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
        });
    }

    // ================= RELATED PRODUCT SLIDER =================
    const track = document.querySelector(".slider-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (track && prevBtn && nextBtn) {
        let index = 0;
        const cards = document.querySelectorAll(".related-card");
        const totalCards = cards.length;

        // ✅ FIX: offsetWidth 0 આવે તો fallback
        const cardWidth = (cards[0]?.offsetWidth || cards[0]?.getBoundingClientRect().width || 220) + 20;

        function updateSlider() {
            // ✅ FIX: index bounds check અહીં centralize કર્યો
            if (index >= totalCards) index = 0;
            if (index < 0) index = totalCards - 1;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        nextBtn.addEventListener("click", () => {
            index++;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            index--;
            updateSlider();
        });

        // ✅ FIX: updateSlider() call ઉમેર્યો — પહેલા missing હતો
        let auto = setInterval(() => {
            index++;
            updateSlider(); // ← BUG FIX
        }, 3000);

        track.addEventListener("mouseenter", () => clearInterval(auto));
        track.addEventListener("mouseleave", () => {
            auto = setInterval(() => {
                index++;
                updateSlider(); // ← BUG FIX
            }, 3000);
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
        if (images.length === 0) return; // ✅ Safety check

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

        if (modal && slider && modalImg) { // ✅ modalImg null check ઉમેર્યો
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
        if (target) target.style.display = "block"; // ✅ Null check
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
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".main-menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => menu.classList.toggle("active")); // ✅ onclick → addEventListener
    }

    // ================= INQUIRY MODAL =================
    const inquiryModal = document.getElementById("inquiryModal");
    const closeBtn = document.querySelector(".close-btn");

    if (inquiryModal) {
        setTimeout(() => {
            inquiryModal.style.display = "flex";
        }, 4000);
    }

    if (closeBtn && inquiryModal) { // ✅ inquiryModal null check
        closeBtn.addEventListener("click", () => { // ✅ onclick → addEventListener
            inquiryModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (e) { // ✅ window.onclick → addEventListener
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
fetch("../social.html")
    .then(res => {
        if (!res.ok) throw new Error("social.html load failed"); // ✅ Error check
        return res.text();
    })
    .then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
    })
    .catch(err => console.error("Social fetch error:", err)); // ✅ catch ઉમેર્યો
