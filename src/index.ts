import Data from "./data";
import Format from "./manipulations/format";
import Email from "./validations/email"
import Password from "./validations/password";

type options = {
  [key: string]: RegExp
}

class Zeefy extends Data{
  
  #Email = new Email(this.emailOptions)
  #Password = new Password(this.passwordOptions)
  #Format = new Format(this.formatOptions)

  email = this.#Email.email
  password = this.#Password.password
}


const z = new Zeefy()

console.log(z.email('email-basic').test("awdawd"))