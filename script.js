//untuk Slideshow//
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

//untuk modal 1 dan 2//

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    var modals = document.getElementById("myModals");
    var btns = document.getElementById("myBtns");
    var spans = document.getElementsByClassName("closes")[0];

    btns.onclick = function() {
    modals.style.display = "block";
    }

    spans.onclick = function() {
    modals.style.display = "none";
    }

//untuk Ajax Button//
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
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhr.send();
});

//untuk Back to Top//
const toTop = document.querySelector(".to-top");

    window.addEventListener("scroll", () => {
        if ( window.pageYOffset > 500) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })

    // KODE AJAX
    //var getApi = {
        //"url": "https://hacker-news.firebaseio.com/v0/item/8863.json",
        //"method": "GET",
        //"timeout": 0,
      //};
      
      //$.ajax(getApi).done(function (response) {
        //console.log(response)
        //const kids = response.kids;
        //let content = ""
        //content = `<p>isi dari ajax : ${kids}</p>`

        //$('#status').html(content);
      //});