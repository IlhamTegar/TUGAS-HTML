document.getElementById('HOME').addEventListener('click', function () {
    showContent('Ini adalah informasi terkini terkait Air Terjun Tupak Sewu.');
});

document.getElementById('CONTENT').addEventListener('click', function () {
    showContent('Ini adalah informasi dan gambar terkait Air Terjun Tupak Sewu.');
});

document.getElementById('CONTACT').addEventListener('click', function () {
    showContent('Hubungi kami di sing.gampangbae123@gmail.com');
});

function showContent(content) {
    document.getElementById('content-section').innerHTML = `<p>${content}</p>`;
}
