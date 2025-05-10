// 1. Responsive Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  
    // 2. Dynamic Copyright
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
  
    // 3. Last Modified Date
    const lastMod = document.getElementById("lastModified");
    lastMod.textContent = `Last Modified: ${document.lastModified}`;
  
    // 4. Courses Array
    const courses = [
      { code: "CSE110", name: "Intro to Programming", credits: 3, completed: true },
      { code: "CSE111", name: "Programming with Functions", credits: 3, completed: true },
      { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
      { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, completed: false },
      { code: "CSE210", name: "Programming with Classes", credits: 3, completed: false },
      { code: "WDD231", name: "Web Frontend Development II", credits: 2, completed: false },
    ];
  
    const container = document.getElementById("courseContainer");
    const allBtn = document.getElementById("allCourses");
    const wddBtn = document.getElementById("wddCourses");
    const cseBtn = document.getElementById("cseCourses");
    const creditDisplay = document.getElementById("totalCredits");
  
    function renderCourses(courseList) {
      container.innerHTML = "";
      let totalCredits = 0;
  
      courseList.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course");
        courseCard.classList.add(course.completed ? "completed" : "incomplete");
  
        courseCard.innerHTML = `
          <h3>${course.code}</h3>
          <p>${course.name}</p>
          <p>Credits: ${course.credits}</p>
        `;
        container.appendChild(courseCard);
        totalCredits += course.credits;
      });
  
      creditDisplay.textContent = `Total Credits: ${totalCredits}`;
    }
  
    // Button Events
    allBtn.addEventListener("click", () => renderCourses(courses));
    wddBtn.addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("WDD"))));
    cseBtn.addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("CSE"))));
  
    // Initial Load
    renderCourses(courses);
  });
  