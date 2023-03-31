// Load the SheetJS library
const XLSX = require('xlsx');

// Define a function to calculate the time response
function calculateTimeResponse() {
    // Record the time when the stimulus is shown on the screen
    const stimulusTime = new Date().getTime();

    // Add a click event listener to the stimulus element
    const stimulusElement = document.getElementById('stimulus');
    stimulusElement.addEventListener('click', () => {
        // Calculate the time difference between the stimulus time and the click time
        const clickTime = new Date().getTime();
        const timeDiff = clickTime - stimulusTime;

        // Create a new Excel workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet([{ timeDiff }]);

        // Add the worksheet to the workbook and save it to a file
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Response Times');
        XLSX.writeFile(workbook, 'response_times.xlsx');
    });
}
