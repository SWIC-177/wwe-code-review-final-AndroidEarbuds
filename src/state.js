import { BELTS, CHAMPIONS } from "./data"; // Importing data constants
import { filterItemsByTerm } from "./lib"; // Importing helper function for filtering items

// Definition of State class to manage application state
export class State {
  // Private properties to store belts, champions, and search term
  #belts = BELTS; // Initializing with BELTS data

  #champions = CHAMPIONS; // Initializing with CHAMPIONS data

  #search = ""; // Initializing search term as empty string

  // Getter method to retrieve filtered data based on search term
  get data() {
    // Filtering items based on search term using helper function
    const filteredResults = filterItemsByTerm({
      terms1: this.#champions, // Passing champions data
      terms2: this.#belts, // Passing belts data
      actionTerm: this.#search, // Passing search term
    });

    // Returning an object with filtered champions and belts
    return {
      champions: filteredResults.terms1, // Filtered champions
      belts: filteredResults.terms2, // Filtered belts
    };
  }

  // Getter method to retrieve current search state
  get searchState() {
    return this.#search; // Returning the current search term
  }

  // Setter method to update the search state
  set searchState(value) {
    this.#search = value; // Updating the search term with the provided value
  }
}
