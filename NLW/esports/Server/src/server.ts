import express from "express"  

const app = express()

//todo app.get é o que aparece após a barrado meu url.
//exemplo: www.gooogle.com/ads.

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Anùncio 1'},
    { id: 2, name: 'Anùncio 2' },
    { id: 3, name: 'Anùncio 3' },
    { id: 4, name: 'Anùncio 4' },
  ])
})

app.listen(3333)    