
export function DateUtility(dateString, elementId) {
  const date$ = document.getElementById(elementId);
  date$.innerHTML = "";

 /**
 * Renders a formatted date inside a specified DOM element.
 *
 * @param {string|Date} dateString - A date string or Date object to format and display.
 * @param {string} elementId - The ID of the DOM element where the formatted date will be inserted.
 *
 * @function
 * @export
 */
export function DateUtility(dateString, elementId) {
  /**
   * The DOM element that will display the date.
   * @type {HTMLElement}
   */

  // Create a container to hold the formatted date

  const dateContainer = document.createElement("div");
  dateContainer.className = "date_Container";
 
    // Clear any existing content
  dateContainer.innerHTML = `
    <p class="podcastDate">${new Date(dateString).toLocaleDateString("en-US", {       // Format the date into a readable string
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</p>
  `;

     // Append the formatted date to the target element

  date$.appendChild(dateContainer);
}