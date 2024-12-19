document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('infoButton');
    const infoExtra = document.getElementById('infoExtra');

    if (infoButton && infoExtra) {
        infoButton.addEventListener('click', function() {
            if (infoExtra.style.display === 'none') {
                infoExtra.style.display = 'block';
                infoButton.textContent = 'Mostrar menos información';
            } else {
                infoExtra.style.display = 'none';
                infoButton.textContent = 'Mostrar más información';
            }
        });
    }
});
