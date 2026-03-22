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
        const cardWidth = cards[0]?.offsetWidth + 20 || 0;

        function updateSlider() {
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        nextBtn.addEventListener("click", () => {
            index++;
            if (index > cards.length - 1) index = 0;
            updateSlider();
        });

        prevBtn.addEventListener("click", () => {
            index--;
            if (index < 0) index = cards.length - 1;
            updateSlider();
        });

        // Auto Play
        let auto = setInterval(() => {
            index++;
            updateSlider();
        }, 3000);

        track.addEventListener("mouseenter", () => clearInterval(auto));
        track.addEventListener("mouseleave", () => {
            auto = setInterval(() => {
                index++;
                updateSlider();
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

        if (modal && slider) {
            const images = slider.querySelectorAll("img");
            modal.style.display = "flex";
            modalImg.src = images[currentPos].src;
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

        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.classList.add("active");
    };

    // Default Tab
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
        btn.onclick = () => menu.classList.toggle("active");
    }

    // ================= INQUIRY MODAL =================
    const inquiryModal = document.getElementById("inquiryModal");
    const closeBtn = document.querySelector(".close-btn");

    if (inquiryModal) {
        setTimeout(() => {
            inquiryModal.style.display = "flex";
        }, 4000);
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            inquiryModal.style.display = "none";
        };
    }

    window.onclick = function (e) {
        if (e.target === inquiryModal) {
            inquiryModal.style.display = "none";
        }

        const zoomModal = document.getElementById("imageModal");
        if (e.target === zoomModal) {
            zoomModal.style.display = "none";
        }
    };

});

fetch("../social.html")
    .then(res => res.text())
    .then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
    });