/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {//Toda vez que eu não tiver uma cor no Tailwild, eu posso gerar uma nova cor aqui e ela já entra na biblioteca do plug-in.
          //não esquecer de color a string para dar a referência ou não irá funcionar!
    extend: {
      colors: {
        'nlw-gradient': 'linear - gradient(89.86deg, #9572FC 23.08 %, #43E7AD 33.94 %, #E1D55D 44.57 %)',

        'game-gradiente': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',

      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')", 
      },
    },
  },
  plugins: [],
}
