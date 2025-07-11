document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById("search");
  const dataList = document.getElementById("professors");
  const professorCards = document.querySelectorAll(".professor-card");

  // Fill datalist with professor names
  professorCards.forEach((card) => {
    const nameElem = card.querySelector(".professor-card-name");
    const name = nameElem ? nameElem.innerText.trim() : "";
    if (name) {
      const option = document.createElement("option");
      option.value = name;
      dataList.appendChild(option);

      // Store lowercase name for easier matching later
      card.setAttribute("data-name", name.toLowerCase());
    }
  });

  // Filter cards on input
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    let matchCount = 0;
    professorCards.forEach((card) => {
      const profName = card.getAttribute("data-name");
      const isVisible = profName.includes(query);
      card.style.display = isVisible ? "flex" : "none";
      if (isVisible) matchCount++;
    });
  });

  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim().toLowerCase();

      let matchCount = 0;
      professorCards.forEach((card) => {
        const profName = card.getAttribute("data-name");
        const isVisible = profName.includes(query);
        card.style.display = isVisible ? "flex" : "none";
        if (isVisible) matchCount++;
      });
    });
  }
    
    // Add click listeners to each professor card
    professorCards.forEach((card) => {
        const nameElem = card.querySelector(".professor-card-name");
        if (nameElem) {
            const profName = nameElem.innerText.trim();
            const encodedName = encodeURIComponent(profName);
            const link = `prof-testimonial.html?prof=${encodedName}`;
            card.style.cursor = "pointer";
            card.addEventListener("click", () => {
                window.location.href = link;
            });
        }
    });

    // professorCards.forEach((card) => {
    //     const link = card.getAttribute("data-link");
    //     if (link) {
    //         card.style.cursor = "pointer";
    //         card.addEventListener("click", () => {
    //             window.location.href = link;
    //         });
    //     }
    // });

});
