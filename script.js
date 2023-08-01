document.getElementById("ajaxButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                // Tampilkan respons JSON di bawah tombol
                document.getElementById("response").innerText = JSON.stringify(response, null, 2);
            } else {
                document.getElementById("response").innerText = "Gagal mengambil data dari API Reddit.";
            }
        }
    };
    xhr.open("GET", "https://hacker-news.firebaseio.com/v0/item/8863.json", true);
    xhr.send();
});

const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if ( window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })