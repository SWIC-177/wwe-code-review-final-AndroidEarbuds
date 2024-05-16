// Importing the Search and Table components along with the State class
import Search from "./src/components/search";
import Table from "./src/components/table";
import { State } from "./src/state";

// Getting the DOM element with the id "app"
const appElement = document.getElementById("app");

// Creating a new instance of the State class
const state = new State();

// Function to render the Search and Table components based on the current state
function render(st) {
  // Setting the innerHTML of the appElement with the Search and Table components
  appElement.innerHTML = `
  ${Search({ searchValue: st.searchState })}
  ${Table({
    col1: st.data.belts,
    col2: st.data.champions,
    col1Header: "Belt",
    col2Header: "Champion",
  })}
  `;

  // Getting the search input element from the DOM
  const searchInput = document.getElementById("search");
  // Getting the length of the current value in the search input
  const searchValueLen = searchInput.value.length;

  // Setting focus on the search input and setting the cursor position to the end
  searchInput.focus();
  searchInput.setSelectionRange(searchValueLen, searchValueLen);

  // Adding an event listener for input changes in the search input
  searchInput.addEventListener("input", (e) => {
    // eslint-disable-next-line no-param-reassign -- It's a class with a setter!
    // Updating the searchState in the state object with the new input value
    st.searchState = e.target.value;
    // Re-rendering the components based on the updated state
    render(st);
  });
}

// Initial rendering of the components with the initial state
render(state);
