export const validateEmail = (email: string) => {
  const regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
  if (regex.test(email)) {
    return { valid: true, message: 'El correo es uno válido.' };
  } else {
    return {valid: false, message: 'El correo no es uno válido.'};
  }
}

export const validateNumUsername = (username: string) => {
  if (username.length >= 4) {
    return { valid: true, message: 'El nombre de usuario tiene +4 caracteres.' };
  } else {
    return { valid: false, message: 'La nombre de usuario no tiene +4 caracteres.' };
  }
}

export const validateNumPassword = (password: string) => {
  if (password.length >= 8) {
    return { valid: true, message: 'La contraseña tiene +8 caracteres.' };
  } else {
    return { valid: false, message: 'La contraseña no tiene +8 caracteres.' };
  }
}

export const validateMayusPassword = (password: string) => {
  const regex = /[A-Z]/g
  if (regex.test(password)) {
    return { valid: true, message: 'La contraseña tiene una mayúscula.' };
  } else {
    return { valid: false, message: 'La contraseña no tiene una mayúscula.' };
  }
}

export const validateANumPassword = (password: string) => {
  const regex = /[1-9]/g
  if (regex.test(password)) {
    return {valid: true, message: 'La contraseña tiene un número.'}
  } else {
    return {valid: false, message: 'La contraseña no tiene un número.'};
  }
}

export const validatePasswords = (password: string, repassword:string) => {
  if (password === repassword) {
    return {valid: true, message: 'Las contraseñas coinciden.'};
  } else {
    return {valid: false, message: 'Las contraseñas no coinciden.'};
  }
}