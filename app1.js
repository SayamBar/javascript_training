const s1 = document.querySelector(".button");
s1.onclick = () => {
    localStorage.clear();
    location.replace("login.html");
}