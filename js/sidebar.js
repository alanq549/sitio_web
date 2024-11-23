document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('ocultar');
  const mostrarButton = document.getElementById('mostrar');
  const contenido = document.getElementById('content');

  // Función para ocultar el sidebar y mostrar el botón de mostrar sidebar
  function ocultarSidebar() {
      sidebar.classList.add('d-none');
      toggleButton.style.display = 'none';
      mostrarButton.style.display = 'block';
      // Modificar las clases de contenido al ocultar la barra lateral
      contenido.classList.remove('col-md-10', 'col-sm-9');
      contenido.classList.add('col-md-15', 'col-sm-13');
  }

  // Función para mostrar el sidebar y ocultar el botón de mostrar sidebar
  function mostrarSidebar() {
      sidebar.classList.remove('d-none');
      toggleButton.style.display = 'block';
      mostrarButton.style.display = 'none';
      // Modificar las clases de contenido al mostrar la barra lateral
      contenido.classList.remove('col-md-15', 'col-sm-9');
      contenido.classList.add('col-md-10', 'col-sm-9');
  }

  // Ocultar el sidebar por defecto al cargar la página
  ocultarSidebar();

  // Agregar evento de clic al botón "☰/ocultar"             
  toggleButton.addEventListener('click', () => {
      ocultarSidebar();
  });

  // Agregar evento de clic al botón "mostrar"
  mostrarButton.addEventListener('click', () => {
      mostrarSidebar();
  });
});
