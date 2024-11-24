document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    const content = document.getElementById('content');
    const botones = document.getElementById('botones'); // Seleccionamos #botones

    // Inicializar el tooltip (sin título por ahora)
    var tooltip = new bootstrap.Tooltip(toggleButton);

    // Función para alternar entre abrir y cerrar el sidebar
    function toggleSidebar() {
        const isSidebarVisible = sidebar.classList.contains('visible');

        if (isSidebarVisible) {
            // Si está visible, lo cerramos
            sidebar.classList.remove('visible');
            content.classList.remove('sidebar-visible');
            botones.classList.remove('sidebar-visible');
            toggleButton.textContent = '☰'; // Cambiar a icono de abrir

            // Destruir el tooltip actual y crear uno nuevo
            tooltip.dispose();
            tooltip = new bootstrap.Tooltip(toggleButton, {
                title: "Abrir el menú" // Cambiar el texto del tooltip
            });
        } else {
            // Si está cerrado, lo abrimos
            sidebar.classList.add('visible');
            content.classList.add('sidebar-visible');
            botones.classList.add('sidebar-visible');
            toggleButton.textContent = '☰'; // Cambiar a icono de cerrar

            // Destruir el tooltip actual y crear uno nuevo
            tooltip.dispose();
            tooltip = new bootstrap.Tooltip(toggleButton, {
                title: "Cerrar el menú" // Cambiar el texto del tooltip
            });
        }
    }

    // Agregar evento al botón para alternar el sidebar
    toggleButton.addEventListener('click', toggleSidebar);
});
