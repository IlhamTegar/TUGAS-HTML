document.addEventListener('DOMContentLoaded', function () {
    // Menangkap elemen tanda panah
    var scrollArrow = document.querySelector('.scroll-down-arrow');

    // Menambahkan event listener untuk melakukan scroll ke bawah saat tanda panah diklik
    scrollArrow.addEventListener('click', function () {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Menampilkan atau menyembunyikan tanda panah berdasarkan posisi scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollArrow.style.opacity = '0';
        } else {
            scrollArrow.style.opacity = '1';
        }
    });
});
