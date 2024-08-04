const areas = document.querySelectorAll('.area');

    areas.forEach(area => {
        area.addEventListener('click', function() {
            const info = area.getAttribute('data-info');
            alert(info); // Exibe um alerta com as informações da área
        });
    });
