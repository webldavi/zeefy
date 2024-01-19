type emailLevel = 'email-basic' | 'email-medium' | 'email-advanced'

class Email{
  emailOptions: {[key:string]:RegExp};
  constructor(table: {[key:string]: RegExp}){
    this.emailOptions = table
  }
  /**
      *
      * @description Function for validate string of type email from validation level
      * @example 'email-basic': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,\n
      * @example 'email-medium': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/,\n
      * @example 'email-advanced': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/\n
      * 
      * @param level string
    */
  email(level: emailLevel) {
    const options = this.emailOptions
    return {
      /**
       * @description Function that will test string
       * 
       * @param str string
       */
      test(str: string):boolean {
        const validate = new RegExp(options[level])
        return validate.test(str)
      }
    }
  }
}

export default Email