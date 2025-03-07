onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const mysteryBtn = document.getElementById("mysteryBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

mysteryBtn.addEventListener("click", () => {
    mysteryBtn.style.display = "none";
    wrapper.style.display = "flex";
    document.querySelector(".buttons").style.display = "block";
    
    // Thêm hiệu ứng fade in
    wrapper.style.opacity = "0";
    setTimeout(() => {
        wrapper.style.transition = "opacity 0.5s ease";
        wrapper.style.opacity = "1";
    }, 10);
});

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});
  