// resize.js
document.addEventListener('DOMContentLoaded', function() {
  const resizeToggle = document.getElementById('resizeToggle');
  const body = document.body;
  
  resizeToggle.addEventListener('click', function() {
    body.classList.toggle('expanded');
    
    // Change icon based on state
    if (body.classList.contains('expanded')) {
      // Expanded state - show minimize icon
      resizeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 14h6v6"></path>
          <path d="M20 10h-6V4"></path>
          <path d="M14 10l7-7"></path>
          <path d="M3 21l7-7"></path>
        </svg>
      `;
      resizeToggle.title = "Restore size";
    } else {
      // Normal state - show expand icon
      resizeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 3h6v6"></path>
          <path d="M9 21H3v-6"></path>
          <path d="M21 3l-7 7"></path>
          <path d="M3 21l7-7"></path>
        </svg>
      `;
      resizeToggle.title = "Expand size";
    }
  });
});