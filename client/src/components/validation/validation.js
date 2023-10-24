export default (input) => {
  const errors = { allConditions: true };
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexLetters = /^[A-Za-z]+( [A-Za-z]+)*$/;
  /// NOMBRE COMPLETO
  if (!input.nombre) {
    errors.nombre = "Debe ingresar un nombre.";
    errors.allConditions = false;
  } else if (input.nombre.length < 3) {
    errors.nombre = "El nombre debe tener al menos 3 caracteres.";
    errors.allConditions = false;
  } else if (input.nombre.length > 30) {
    errors.nombre = "El nombre no puede tener más de 30 caracteres.";
    errors.allConditions = false;
  } else if (!regexLetters.test(input.nombre)) {
    errors.nombre = "El nombre sólo puede contener letras";
    errors.allConditions = false;
  }
  ///  EMPRESA
  if (!input.empresa) {
    errors.empresa = "Este campo no debe estar vacío.";
    errors.allConditions = false;
  } else if (input.empresa.length < 3) {
    errors.empresa = "El campo debe tener al menos 3 caracteres.";
    errors.allConditions = false;
  } else if (input.empresa.length > 30) {
    errors.empresa = "El campo no puede tener más de 30 caracteres.";
    errors.allConditions = false;
  }
  if (!input.mensaje) {
    errors.mensaje = "Este campo no debe estar vacío.";
    errors.allConditions = false;
  } else if (input.mensaje.length < 5) {
    errors.mensaje = "El campo debe tener al menos 3 caracteres.";
    errors.allConditions = false;
  } else if (input.mensaje.length > 200) {
    errors.mensaje = "El campo no puede tener más de 200 caracteres.";
    errors.allConditions = false;
  }
  /// CORREO ELECTRÓNICO
  if (!input.correo) {
    errors.correo = "Debe ingresar un correo electrónico.";
    errors.allConditions = false;
  } else if (!regexEmail.test(input.correo)) {
    errors.correo = "Debe ingresar un correo electrónico válido.";
    errors.allConditions = false;
  }

  return errors;
};
