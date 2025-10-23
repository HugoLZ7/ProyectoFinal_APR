document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario");
  const password = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");

  // Validación básica
  if (!usuario.value.trim() || !password.value.trim()) {
    usuario.classList.add("is-invalid");
    password.classList.add("is-invalid");
    return;
  } else {
    usuario.classList.remove("is-invalid");
    password.classList.remove("is-invalid");
  }

  // Credenciales de ejemplo
  const userValido = "admin";
  const passValido = "12345";

  if (usuario.value === userValido && password.value === passValido) {
    errorMsg.classList.add("d-none");

    // Mostrar el modal de "Iniciando sesión..."
    const modal = new bootstrap.Modal(document.getElementById("loadingModal"));
    modal.show();

    
 // Simular un pequeño tiempo de carga
    setTimeout(() => {
      window.location.href = "inventario.html";
    }, 2000); // redirige después de 2 segundos
  } else {
    errorMsg.classList.remove("d-none");
  }
});
