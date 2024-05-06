document.getElementById('turnOnBtn').addEventListener('click', function() {
    fetch('/on')
        .then(response => {
            if (!response.ok) {
                throw new Error('Nepodařilo se zapnout zásuvku');
            }
            console.log('Zásuvka byla zapnuta');
        })
        .catch(error => {
            console.error('Chyba:', error);
        });
});

document.getElementById('turnOffBtn').addEventListener('click', function() {
    fetch('/off')
        .then(response => {
            if (!response.ok) {
                throw new Error('Nepodařilo se vypnout zásuvku');
            }
            console.log('Zásuvka byla vypnuta');
        })
        .catch(error => {
            console.error('Chyba:', error);
        });
});