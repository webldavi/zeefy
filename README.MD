
<img src="https://i.imgur.com/2UuqFWC.png" width="550"/>


# Zeefy - library for string manipulation

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

✨ zeefy is a lib designed to manipulate strings in different ways, validation, searches, transformations and more. 



## 🪄 Features

- **✅ - Email validation**
    - `z.email` Receives a string parameter, which will be the validation level of the email
        - **email-basic**: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        - **email-medium**: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/,
        - **email-advanced**: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
    - `z.email().test()` Receives as a parameter the string that contains the email to be tested
        - **Example:** [See Example](https://github.com/webldavi/zeefy#Usage/Examples)
          
- **✅ - Password validation**
    - `z.password` Receives a string parameter, which will be the validation level of the password
        - **password-basic**: /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/
        - **password-medium**: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
        - **password-advanced**: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}$/
    - `z.password().test()` Receives as a parameter the string that contains the email to be tested
        - **Example:** [See Example](https://github.com/webldavi/zeefy#Usage/Examples)
     
- **✅ - String formatation**
  - `z.format()` Receives a string type parameter that will be the format you want to transform the string into
      - **brazil-phone**: '+55 (##) 9-####-####',
      - **brazil-cep**: '#####-###',
      - **brazil-cpf**: '###.###.###-##',
      - **brazil-cnpj**: '##.###.###/####-##'
  - `z.format().to()` Receivezs as a parameter the string that contains the content to be formated
      - **Example**: [See Example](https://github.com/webldavi/zeefy#Usage/Examples)

## ⚠️ - Installation - unready

for npm users:
```bash
  npm install zeefy
```
for yarn users:
```bash
  yarn add zeefy
```
for pnpm users:
```bash
  pnpm install zeefy
```
    
## 🚀 - Usage/Examples

*Init the zeefy class*

```javascript
import Zeefy from 'zeefy'

const z = new Zeefy()
```

*Validate an email or password*

```javascript
console.log(
    z.email('email-basic').test('luisdavi.contato@gmail.com'), // Return true its a valid email
    z.password('password-basic').test('12312a3') // Return false its a not valid password
)
```

*Format an string with template*
```javascript
console.log(
    z.format('1234567890').to('brazil-phone') // Return +55 (12) 9-3456-7890
    z.format('12345678901').to('brazil-cpf') // Return 123.456.789-01
    ...
)
```
## Authors

| Foto de perfil      | Descrição |
| :-------------------: | :---------: |
| <img src="https://avatars.githubusercontent.com/u/89264926?v=4" alt="Sua Foto de Perfil" width="50" height="50" style="border-radius: 99px">     | Olá, eu sou [Luis Davi](https://luisdavi.vercel.app), um desenvolvedor entusiasta que criou a biblioteca **webMaster**. Estou sempre buscando maneiras de tornar a web mais incrível e funcional.

---

- 💼 Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/luisdav1)
- 🌐 Visite o meu [site pessoal](https://luisdavi.tech) para saber mais sobre meus projetos
- 📸 Siga-me no [Instagram](https://instagram.com/lu1s.dev) para ver as últimas novidades

Fique à vontade para entrar em contato comigo para qualquer dúvida ou colaboração!

