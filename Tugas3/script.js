function scrollToNextSection() {
    // Menentukan elemen berikutnya yang akan dituju
    var currentSection = document.querySelector('.content:target');
    var nextSection = currentSection.nextElementSibling;

    // Memeriksa apakah ada elemen berikutnya
    if (nextSection) {
        // Mengganti tautan hash untuk mengarahkan ke elemen berikutnya
        location.hash = nextSection.id;

        // Menyembunyikan semua div yang berjumlah 3 dan footer
        hideDivsAndFooter();
    }
}

function hideDivsAndFooter() {
    // Mendapatkan semua elemen div yang berjumlah 3
    var divsToHide = document.querySelectorAll('.content:nth-child(3n)');

    // Mendapatkan elemen footer
    var footerToHide = document.querySelector('footer');

    // Menyembunyikan semua div yang berjumlah 3
    divsToHide.forEach(function(div) {
        div.style.display = 'none';
    });

    // Menyembunyikan footer
    if (footerToHide) {
        footerToHide.style.display = 'none';
    }
}
