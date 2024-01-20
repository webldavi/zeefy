const options = {
  /**
   * @description Define All expressions for email test
   */
  emailOptions: {
    'email-basic': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'email-medium': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/,
    'email-advanced': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
  },

  /**
   * @description Define All expressions for password test
   */
  passwordOptions: {
    'password-basic': /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
    'password-medium': /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
    'password-advanced': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}$/
  },

  /**
   * @description Define All templates for string format
   */
  formatOptions: {
    'brazil-phone': '+55 (##) 9-####-####',
    'brazil-cep': '#####-###',
    'brazil-cpf': '###.###.###-##',
    'brazil-cnpj': '##.###.###/####-##'
  }
}


class Data {
  emailOptions = options.emailOptions
  passwordOptions = options.passwordOptions
  formatOptions = options.formatOptions
}

export default Data