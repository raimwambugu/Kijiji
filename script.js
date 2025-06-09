/ Visitor Counter using localStorage
window.addEventListener("load", () => {
    let count = localStorage.getItem("visitCount") || 0;
    count++;
    localStorage.setItem("visitCount", count);
    document.getElementById("visit-count").textContent = `Visits: ${count}`;
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        const currentlyOpen = document.querySelector(".faq-answer.show");
        if (currentlyOpen && currentlyOpen !== answer) {
            currentlyOpen.classList.remove("show");
            currentlyOpen.style.display = "none";
        }
        const isVisible = answer.classList.contains("show");
        if (isVisible) {
            answer.classList.remove("show");
            answer.style.display = "none";
        } else {
            answer.classList.add("show");
            answer.style.display = "block";
        }
    });
});

// Audience Toggle Switch
const toggle = document.getElementById("audienceSwitch");
const label = document.getElementById("audienceLabel");
const travelerContent = document.getElementById("travelerContent");
const localContent = document.getElementById("localContent");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        label.textContent = "For Locals";
        travelerContent.style.display = "none";
        localContent.style.display = "block";
    } else {
        label.textContent = "For Travelers";
        travelerContent.style.display = "block";
        localContent.style.display = "none";
    }
});
