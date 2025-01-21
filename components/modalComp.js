import { button } from "./compBtn.js"

export const modalComp = (
  titleText = "Default title",
  bodyText = "default body",
  className = ""
) => {
  // Create the modal overlay
  const divElement = document.createElement("div")
  divElement.setAttribute("tabindex", "-1")
  divElement.classList.add("overlay-modal", "d-none")

  // Click handler to close/hide the modal when overlay or "X" is clicked
  const handleClick = (e) => {
    // If user clicked on the overlay itself OR the "X" button text
    if (
      e.target.classList.contains("overlay-modal") ||
      e.target.textContent === "X"
    ) {
      divElement.classList.add("d-none")
    }
  }

  // Attach the handler to the entire overlay
  divElement.addEventListener("click", handleClick)

  // Create the modal content wrapper
  const modalContent = document.createElement("div")
  modalContent.classList.add("modal-content")

  // Create the modal header
  const modalHeader = document.createElement("header")
  modalHeader.classList.add("modal-header")
  // Add a dynamic background color class if provided
  if (className) {
    modalHeader.classList.add(className)
  }

  // Create a title element for the modal header
  const modalTitle = document.createElement("h2")
  modalTitle.textContent = titleText

  // Create a body element
  const modalBody = document.createElement("div")
  modalBody.classList.add("class-body")

  // Check if bodyText is a string or a DOM node
  if (typeof bodyText === "string") {
    modalBody.textContent = bodyText
  } else {
    modalBody.appendChild(bodyText)
  }

  // Append title and close button to the header
  modalHeader.appendChild(modalTitle)
  modalHeader.appendChild(button("X", handleClick, "btn"))

  // Create a footer for optional actions
  const modalFooter = document.createElement("footer")
  modalFooter.classList.add("modal-footer")

  // Example: Add a second close button in the footer
  modalFooter.appendChild(button("Close", handleClick, "btn"))

  // Assemble the modal content
  modalContent.appendChild(modalHeader)
  modalContent.appendChild(modalBody)
  modalContent.appendChild(modalFooter)

  // Finally, append the modal content to the overlay
  divElement.appendChild(modalContent)

  // Return the completed modal overlay element
  return divElement
}
