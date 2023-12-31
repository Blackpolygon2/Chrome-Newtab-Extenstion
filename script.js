
  // Get the form and input field by their IDs
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-query");

  // Define a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user's search query
    const query = searchInput.value.trim();

    // Check if the query is not empty
    if (query !== "") {
      // Define the search engine URL (e.g., Google)
      const searchEngineUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

      // Redirect the user to the search engine
      window.location.href = searchEngineUrl;
    }
  }

  // Add a submit event listener to the form
  searchForm.addEventListener("submit", handleSubmit);

  
  // Update the clock every second (1000 milliseconds)
  
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Convert hours to 12-hour format and determine AM/PM
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert 0 to 12
  
    const timeString = `${displayHours}:${addLeadingZero(minutes)} ${amPm}`;
  
    // Replace 'clock' with the ID of the HTML element where you want to display the time
    document.getElementById('time').textContent = timeString;

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    let dayOfMonth = now.getDate();
    if (dayOfMonth < 10) {
      dayOfMonth = `0${dayOfMonth}`;
    }
  
    const dateString = `${dayOfWeek}  ${month} ${dayOfMonth}`;
  
    document.getElementById('date').textContent = dateString;
  }
  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
  }
  
  setInterval(updateClock, 1000);
  