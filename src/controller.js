import { error } from 'console';
import { randomUUID } from 'crypto';

const Controller = {
  // - `POST - /tasks`

  //     Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.

  //     Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
  criaTask: async (req, res) => {
    const title = JSON.parse(req.body.title)
    const description = JSON.parse(req.body.description)
    try {
      const task = await criaTask({
        id_task: randomUUID(),
        title_task: title,
        description_task: description,
        created_at:Date.now(),
        updated_at:Date.now(),
        completed_at: null
      })
      return res.render('task criada', { task })
    } catch(e) {
      console.log('event:'+e+' error:'+error)
     }
  },

  // - `GET - /tasks`

  //     Deve ser possível listar todas as tasks salvas no banco de dados.

  //     Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`

  listaTasks: async (req, res) => {
    try{
    const pesquisa = req.query.busca

      if(pesquisa==null||pesquisa==undefined||pesquisa==''){
      const lista = await listarTasks()
      
      res.render(lista)
      }else{
    const lista = await mostrarTaskPesquisada(pesquisa)

      res.render(lista)
  }
    }catch{
      console.error(error)
    }
  },

  // - `PUT - /tasks/:id`

  //     Deve ser possível atualizar uma task pelo `id`.

  //     No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.

  //     Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.

  //     Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

  atualizarTask: async (req, res) => {
    const title = JSON.parse(req.body.title)
    const description = JSON.parse(req.body.description)

    try{
      if(id_task){
      const mudancaTask = await editaTask(id_task,{
        title_task: title,
        description_task: description,
        updated_at:Date.now()
      })
      res.render(mudancaTask)
    }else{
        console.log("id não encontrado")
      }
    }catch{
      console.error("error: "+error)
    }
  },

  // - `DELETE - /tasks/:id`

  //     Deve ser possível remover uma task pelo `id`.

  //     Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
  deletaTask: async(req, res)=>{
    try{
      if(id_task){
    const deleteTask = await deletarTask(id_task)
    res.render("Task "+deleteTask+" deletada com sucesso")}
  }catch{
    console.error("error: "+error)
    }
  },

  // - `PATCH - /tasks/:id/complete`
concluiTask: async(req, res)=>{
  try{
    if(id_task){
      const concluida = await concluirTask(id_task, {
        completed_at: Date.now()
      })

      res.render("Parabéns! Você concluiu a task "+concluida)
    }
  }catch{
    console.error("error: "+error)
  }
}

}
export default Controller