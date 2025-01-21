"use strict";

// 1. Imported the components
import { button } from "./components/compBtn.js";
import { eclipseComp } from "./components/eclipseComp.js";
import { headerComp } from "./components/headerComp.js";
import { naveBar } from "./components/navBar.js"; 
import { showModal } from "./services/services.js";

// 2. Grab the app container from index.html
const app = document.getElementById("app");

// 3. Append the nav bar
app.appendChild(naveBar());

// 4. Appended a header component
const header = headerComp();
app.appendChild(header);

// 5. Appended the eclipse component
const eclipse = eclipseComp();
app.appendChild(eclipse);

// 6. Created a button that triggers the modal
const modalButton = button(
  "Open Modal", 
  () => {
    // This calls showModal from services.js
    showModal("Hello from the Modal!", "This is some body text");
  },
  "btn-class" // pass a specific CSS class for styling
);

// 7. Finally, append the button so it's visible
app.appendChild(modalButton);
