const express = require('express')
const router = express.Router()
const Controller = require('./controller').default

// - `POST - /tasks`
    
//     Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
    
//     Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
router.post('/tasks', Controller.criaTask)    


// - `GET - /tasks`
    
//     Deve ser possível listar todas as tasks salvas no banco de dados.
    
//     Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
router.get('/tasks', Controller.listaTasks)  

    
// - `PUT - /tasks/:id`
    
//     Deve ser possível atualizar uma task pelo `id`.
    
//     No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
    
//     Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
    
//     Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
router.put('/tasks/:id', Controller.atualizarTask)  


// - `DELETE - /tasks/:id`
    
//     Deve ser possível remover uma task pelo `id`.
    
//     Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
router.delete('/tasks/:id', Controller.deletaTask)

    
// - `PATCH - /tasks/:id/complete`
router.patch('/tasks/:id/complete', Controller.concluiTask)  