document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const profName = params.get("prof");

  const heading = document.getElementById("prof-name-heading");
  if (heading) {
    heading.innerText = profName ? decodeURIComponent(profName) : "Unknown Professor";
  }

  const submitBtn = document.getElementById("submit-btn");
  const textarea = document.getElementById("testimonial");

  if (submitBtn && textarea) {
    submitBtn.addEventListener("click", () => {
      const message = textarea.value.trim();
      if (!message) {
        alert("Please write your testimonial before submitting.");
        return;
      }

      // Optionally handle the submission here
      alert(`Testimonial for ${profName} submitted!`);
      window.location.href = "thankyou.html";
    });
  }
});
