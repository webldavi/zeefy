type formatOptions = 'brazil-phone' | 'brazil-cep' | 'brazil-cpf' | 'brazil-cnpj'

class Format {
  formatOptions: {[key:string]:string};
  constructor(table: {[key:string]:string}){
    this.formatOptions = table
  }

  /**
      *
      * @description Function that formats a string from a template
      * @example 'brazil-phone': '+55 (##) 9-####-####',
      * @example 'brazil-cep': '#####-###',
      * @example 'brazil-cpf': '###.###.###-##',
      * @example 'brazil-cnpj': '##.###.###/####-##'
      * 
      * @param level string
    */
  format(str: string){
    return {
      /**
       * @description Function that will format string
       * 
       * @param options 'brazil-phone' | 'brazil-cep' | 'brazil-cpf' | 'brazil-cnpj'
       */
      to(option: formatOptions){
        switch(option){
          case 'brazil-phone' || 'brazil-cep' || 'brazil-cpf' || 'brazil-cnpj':
            const numbers = str.replace('/\D/g', '')
            let index = 0
            return option.replace('/#/g', ()=>numbers[index++] || '')
        }
      }
    }
  }
}

export default Format