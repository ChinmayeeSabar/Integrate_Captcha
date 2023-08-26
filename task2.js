(function () {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha() {
        let value = btoa(Math.random() * 1000000000);
        value = value.substr(0, 5 + Math.random() * 5);
        captchaValue = value;
    }
    function setCaptcha() {
        let html = captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span
             style="
             transform:rotate(${rotate}deg);
             font-family:${fonts[font]}
             "
            >${char}</span>`
        }).join("");
        document.querySelector(".login_form .captcha .preview").innerHTML = html;
    }
    function initCaptcha() {
        document.querySelector(".login_form .captcha .captcha_refresh").addEventListener("click", function () {
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();

    document.querySelector(".login_form #login_btn").addEventListener("click", function () {
        let inputCaptchaValue = document.querySelector(".login_form .captcha input").value;
        if (inputCaptchaValue === captchaValue) {
            alert("Form is validated Succesfully");
            return true;
        } else {
            alert("Please enter a valid captcha");
            return false;
        }
    });
})();
