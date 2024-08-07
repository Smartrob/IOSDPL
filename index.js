document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.getElementById('dateInput');
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const todayFormatted = `${yyyy}-${mm}-${dd}`;
    dateInput.value = todayFormatted;
});


function calculateDifference() {
    // Get the values from the first and second input fields
    var value1 = parseFloat(document.getElementById('field1').value) || 0;
    var value2 = parseFloat(document.getElementById('field2').value) || 0;
    
    // Calculate the difference
    var difference = value1 - value2;
    
    // Set the difference in the third input field
    document.getElementById('field3').value = difference;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxkfG8AP7k6vLfKQC8RLiTO1yYKItr-ru68aFCZ0elC2CTzVZguLYv9qijMaN5fCYd9_Q/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Fuel voucher succesfully submitted') ? "" : location.reload())
    .catch(error => console.error('Error!', error.message))
})