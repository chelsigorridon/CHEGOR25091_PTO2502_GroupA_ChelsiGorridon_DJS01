export function DateUtility(dateString, elementId) {
  const date$ = document.getElementById(elementId);
  date$.innerHTML = "";

  const dateContainer = document.createElement("div");
  dateContainer.className = "date_Container";

  dateContainer.innerHTML = `
    <p class="podcastDate">${new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</p>
  `;

  date$.appendChild(dateContainer);
}