const text = ["Computer Science Student", "Web Developer", "UI/UX Enthusiast"];
    let i = 0, j = 0, currentText = "", isDeleting = false;

    function type() {
      if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
          currentText = text[i].substring(0, j++);
        } else if (isDeleting && j > 0) {
          currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing-text").textContent = currentText;

        if (j === text[i].length) {
          isDeleting = true;
          setTimeout(type, 1000);
        } else if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % text.length;
          setTimeout(type, 500);
        } else {
          setTimeout(type, isDeleting ? 60 : 100);
        }
      }
    }
    type();

    const btn = document.getElementById("scrollTopBtn");
    window.onscroll = function () {
      btn.style.display = window.scrollY > 100 ? "block" : "none";
    };
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });