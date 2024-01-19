import Email from "./validations/email"
import Password from "./validations/password";

class Zeefy{
  /**
   * @description Define All expressions for email test
   */
  readonly emailOptions = {
    'email-basic': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'email-medium': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/,
    'email-advanced': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
  }

  /**
   * @description Define All expressions for password test
   */
  readonly passwordOptions = {
    'password-basic': /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
    'password-medium': /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
    'password-advanced': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}$/
  };


  #Email = new Email(this.emailOptions)
  #Password = new Password(this.passwordOptions)

  email = this.#Email.email
  password = this.#Password.password
}


const z = new Zeefy()

console.log(z.email('email-basic').test("awdawd"))