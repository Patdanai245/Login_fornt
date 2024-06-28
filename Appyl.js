const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");

function showPopup() {
    // แสดงป็อปอัพ
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    // ซ่อนป็อปอัพ
    document.getElementById("popup").classList.remove("show");
    // ล้างค่า input fields
    inputs.forEach(input => input.value = "");

    // ล้างค่าช่อง Password
    document.getElementById("password").value = "";
    document.getElementById("confirm_password").value = "";
}

const eyeIcon = document.getElementById("eye");
const passwordEl = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
    if (eyeIcon.classList.contains("fa-eye")) {
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        passwordEl.setAttribute("type", "text");
    } else {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        passwordEl.setAttribute("type", "password");
    }
});