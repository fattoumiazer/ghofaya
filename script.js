// ================================
// PAGE 1 → PAGE 2
// ================================

const page1Button = document.getElementById("continue-button");

if (page1Button && !document.getElementById("giftForm")) {

    page1Button.addEventListener("click", function () {

        window.location.href = "page2.html";

    });

}


// ================================
// PAGE 2 → CHECK FORM
// ================================

const giftForm = document.getElementById("giftForm");

if (giftForm) {

    const birthDate = document.getElementById("birthDate");
    const resultMessage = document.getElementById("result-message");
    const resultTitle = document.getElementById("result-title");
    const resultText = document.getElementById("result-text");
    const continueButton = document.getElementById("continue-button");

    // النتيجة مخفية في البداية
    if (resultMessage) {
        resultMessage.style.display = "none";
    }

    if (continueButton) {
        continueButton.style.display = "none";
    }


    giftForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const date = birthDate.value.trim();

        // نظهر النتيجة بعد VERIFY
        resultMessage.style.display = "block";


        // =========================
        // DATE CORRECT
        // =========================

        if (date === "12/05/2009") {

            resultTitle.textContent = "BRAVO! ❤️";

            resultText.textContent =
                "Everything is correct. Your gift is waiting for you.";

            resultTitle.style.color = "white";

            continueButton.style.display = "block";


        // =========================
        // DATE WRONG
        // =========================

        } else {

            resultTitle.textContent = "INCORRECT DATE";

            resultText.textContent =
                "The date is incorrect. Please try again.";

            resultTitle.style.color = "#ff6b8a";

            continueButton.style.display = "none";

        }

    });


    // Page 2 → Page 3
    if (continueButton) {

        continueButton.addEventListener("click", function () {

            window.location.href = "page3.html";

        });

    }

}


const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");

if (circle1 && circle2 && circle3) {

    // Circle 1 → Page 4
    circle1.addEventListener("click", function () {

        sessionStorage.setItem("page4Unlocked", "true");

        window.location.href = "page4.html";

    });


    // Circle 2 → Page 5
    circle2.addEventListener("click", function () {

        if (sessionStorage.getItem("page4Unlocked") === "true") {

            sessionStorage.setItem("page5Unlocked", "true");

            window.location.href = "page5.html";

        } else {

            alert("Complete Circle 1 first ❤️");

        }

    });


    // Circle 3 → Page 6
    circle3.addEventListener("click", function () {

        if (
            sessionStorage.getItem("page4Unlocked") === "true" &&
            sessionStorage.getItem("page5Unlocked") === "true"
        ) {

            window.location.href = "page6.html";

        } else {

            alert("Complete Circle 1 and Circle 2 first ❤️");

        }

    });

}

const backToPage3 = document.getElementById("backToPage3");

if (backToPage3) {

    backToPage3.addEventListener("click", function () {

        window.location.href = "page3.html";

    });

}



function showMessage() {
    const message = document.getElementById("hiddenMessage");
    const button = document.getElementById("clickHere");

    message.classList.add("show");
    button.style.display = "none";
}






