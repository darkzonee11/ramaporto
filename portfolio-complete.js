document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn")
  const categorySections = document.querySelectorAll(".category-section")

  // Handle category navigation
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Remove active class from all buttons and sections
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
      categorySections.forEach((section) => section.classList.remove("active"))

      // Add active class to clicked button and corresponding section
      this.classList.add("active")
      document.getElementById(category).classList.add("active")

      // Smooth scroll to top of content
      document.querySelector(".content-container").scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  })

  // Add smooth hover effects for project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Add loading animation for images
  const images = document.querySelectorAll(".project-image img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"
  })
})
