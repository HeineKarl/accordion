const faqBtn = Array.from(document.querySelectorAll(".faq__btn"));

faqBtn.forEach((faqBtn) => {
  faqBtn.addEventListener("click", openFaq);
});

function openFaq(e) {
  let container = e.target.nextElementSibling;
  let arrow = e.target.firstElementChild;
  console.log(e.target);

  if (container.style.maxHeight) {
    container.style.maxHeight = null;
  } else {
    container.style.maxHeight = `${container.scrollHeight + 50}px`;
  }

  container.classList.toggle("active");
  arrow.classList.toggle("rotate");
}
