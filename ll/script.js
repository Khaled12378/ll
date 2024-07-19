document.getElementById('sheetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var data = {
        name: name,
        email: email
    };
    
    fetch('https://script.google.com/macros/s/AKfycbw1oGZp5KlEdVLPH4pM374CRl3m_652O68RHlQ1exGWUZUeqYf36wpAZ6h-sVIis4xQ/exec', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        if (data.result === "success") {
            alert("Data submitted successfully!");
        } else {
            alert("Error submitting data!");
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});
