type passwordLevel = 'password-basic' | 'password-medium' | 'password-advanced'

class Password {
  passwordOptions:{[key:string]:RegExp};
  constructor(table: {[key:string]: RegExp}){
    this.passwordOptions = table
  }
  /**
      *
      * @description Function for validate string of type password from validation level
      * @example 'password-basic': /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
      * @example 'password-medium': /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
      * @example 'password-advanced': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}$/
      * 
      * @param level string
    */
  password(level: passwordLevel){
    const options = this.passwordOptions
    return{
      /**
       * @description Function that will test string
       * 
       * @param str string
       */
      test(str: string){
        const validate = new RegExp(options[level])
        return validate.test(str)
      }
    }
  }
}

export default Password