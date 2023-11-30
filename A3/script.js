
//  data for time slots and locations
const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const locations = [
    'Savanah La Mar', 'Madeville', 'Kingston', 'Half Way Tree', 'Spanish Town', 'May Pen', 'Montego Bay', 'St Antonio', 
    'Falmouth', 'Santa Cruz', 'Lucea', 'Occabessa'
];

// Function to populate the time slots and locations
function populateDropdowns() {
    const timeSlotDropdown = document.getElementById('selectedTimeSlot');
    const locationDropdown = document.getElementById('selectedLocation');

    timeSlots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        timeSlotDropdown.appendChild(option);
    });

    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationDropdown.appendChild(option);
    });
}

// Function to display the available time slots
function displayTimeSlots() {
    const timeSlotContainer = document.getElementById('timeSlots');

    timeSlots.forEach(slot => {
        const button = document.createElement('button');
        button.textContent = slot;
        button.addEventListener('click', () => selectTimeSlot(slot));
        timeSlotContainer.appendChild(button);
    });
}

// Function to handle time slot selection
function selectTimeSlot(slot) {
    document.getElementById('selectedTimeSlot').value = slot;
}


// Function to display the available location slots
function displayLocationSlots() {
    const locationSlotContainer = document.getElementById('locations');

    locations.forEach(slot => {
        const button = document.createElement('button');
        button.textContent = slot;
        button.addEventListener('click', () => selectLocation(slot));
        locationSlotContainer.appendChild(button);
    });
}

// Function to handle the location slot selection
function selectLocation(slot) {
    document.getElementById('selectedLocation').value = slot;
}

// Add event listener for form submission
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const selectedTimeSlot = document.getElementById('selectedTimeSlot').value;
    const selectedLocation = document.getElementById('selectedLocation').value;

    // Simulate appointment scheduling (you can replace this with server-side logic)
    const isSuccessful = simulateAppointmentScheduling(fullName, selectedTimeSlot, selectedLocation);

    // Display confirmation message
    displayConfirmationMessage(isSuccessful, fullName, selectedTimeSlot, selectedLocation);
});

// Function to simulate appointment scheduling (replace with actual logic)
function simulateAppointmentScheduling(fullName, timeSlot, location) {
    // Simulate success or failure based on conditions (e.g., availability)
    return Math.random() < 0.8; // 80% success rate (adjust as needed)
}

// Function to display confirmation message
function displayConfirmationMessage(isSuccessful, fullName, timeSlot, location) {
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (isSuccessful) {
        confirmationMessage.textContent = `Appointment scheduled for ${fullName} on ${timeSlot} at ${location}.`;
    } else {
        confirmationMessage.textContent = `Appointment scheduling failed. Please try again.`;
    }
}

// Call functions to populate dropdowns and display time slots
populateDropdowns();
displayTimeSlots();


// Call functions to populate dropdowns and display the location slots
populateDropdowns();
displayLocationSlots();


// Add event listener for form submission
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const selectedTimeSlot = document.getElementById('selectedTimeSlot').value;
    const selectedLocation = document.getElementById('selectedLocation').value;

    // Simulate appointment scheduling (you can replace this with server-side logic)
    const isSuccessful = simulateAppointmentScheduling(fullName, selectedTimeSlot, selectedLocation);

    // Display confirmation message
    displayConfirmationMessage(isSuccessful, fullName, selectedTimeSlot, selectedLocation);

    // Notify the owner (This is a simulated notification)
    notifyOwner(isSuccessful, fullName, selectedTimeSlot, selectedLocation);
});

// Function to simulate owner notification (replace with actual logic)
function notifyOwner(isSuccessful, fullName, timeSlot, location) {
    if (isSuccessful) {
        console.log(`Owner notified: New appointment scheduled for ${fullName} on ${timeSlot} at ${location}.`);
        alert('Confirmation is successful')
    } else {
        console.log(`Owner notified: Appointment scheduling failed for ${fullName} on ${timeSlot} at ${location}.`);
        alert("Confirmation has failed.")
    }
}




$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Function to display the available location slots
function displayLocationSlots() {
    const locationSlotContainer = document.getElementById('locations');

    locations.forEach(location => {
        const button = document.createElement('button');
        button.textContent = location;
        button.addEventListener('click', () => selectLocation(location));
        locationSlotContainer.appendChild(button);
    });
}

// Event listener for viewing time slots
document.getElementById('viewTimeSlotsBtn').addEventListener('click', function () {
    displayTimeSlots(); // Call the function to display time slots
});

// Event listener for making an appointment
document.getElementById('makeAppointmentBtn').addEventListener('click', function () {
    // Check if a location is selected
    const selectedLocation = document.getElementById('selectedLocation').value;
    if (selectedLocation) {
        // Display the form for appointment scheduling
        document.getElementById('appointmentForm').style.display = 'block';
    } else {
        alert('Please select a location first.');
    }
});

// Add event listener for form submission
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const selectedTimeSlot = document.getElementById('selectedTimeSlot').value;
    const selectedLocation = document.getElementById('selectedLocation').value;

    // Simulate appointment scheduling (you can replace this with server-side logic)
    const isSuccessful = simulateAppointmentScheduling(fullName, selectedTimeSlot, selectedLocation);

    // Display confirmation message
    displayConfirmationMessage(isSuccessful, fullName, selectedTimeSlot, selectedLocation);

    // Notify the owner (This is a simulated notification)
    notifyOwner(isSuccessful, fullName, selectedTimeSlot, selectedLocation);
});

// ... (rest of your existing code)


