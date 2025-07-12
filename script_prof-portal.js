document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById("search");
  const departmentSelect = document.getElementById("department");
  const dataList = document.getElementById("professors");
  const professorContainer = document.querySelector(".professor-card-container");
  const searchBtn = document.getElementById("search-btn");

  let professorCards = Array.from(document.querySelectorAll(".professor-card"));

  // Step 1: Populate datalist and set data-name
  professorCards.forEach((card) => {
    const nameElem = card.querySelector(".professor-card-name");
    const name = nameElem ? nameElem.innerText.trim() : "";
    if (name) {
      const option = document.createElement("option");
      option.value = name;
      dataList.appendChild(option);

      card.setAttribute("data-name", name.toLowerCase());
    }
  });

  // Step 2: Sort the cards by department (alphabetically)
  function sortCardsByDepartment() {
    professorCards.sort((a, b) => {
      const deptA = a.getAttribute("data-department") || "";
      const deptB = b.getAttribute("data-department") || "";
      return deptA.localeCompare(deptB);
    });

    // Remove existing children
    professorContainer.innerHTML = "";

    // Re-append in sorted order
    professorCards.forEach((card) => {
      professorContainer.appendChild(card);
    });
  }

  // Step 3: Filter based on name and department
  function filterProfessors() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedDept = departmentSelect ? departmentSelect.value : "";

    professorCards.forEach((card) => {
      const profName = card.getAttribute("data-name");
      const profDept = card.getAttribute("data-department") || "";

      const matchesName = profName.includes(query);
      const matchesDept = !selectedDept || profDept === selectedDept;

      card.style.display = (matchesName && matchesDept) ? "flex" : "none";
    });
  }

  // Step 4: Make cards clickable
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

  // Step 5: Hook up events
  searchInput.addEventListener("input", filterProfessors);
  departmentSelect?.addEventListener("change", filterProfessors);
  searchBtn?.addEventListener("click", filterProfessors);

  // Step 6: Initial sort
  sortCardsByDepartment();
});
