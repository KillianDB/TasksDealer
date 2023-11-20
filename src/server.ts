import Tasks from './database.ts'

async function criarTask(task: any) {
    try {
      let novaTask = await Tasks.create(
        { ...task }
      )
  
      return novaTask
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
         
  async function listarTasks() {
    try{
    const tasks = await Tasks.findAll()

    return tasks
} catch (e) {
        console.log(e);
        throw new Error(e);
      }
  }
       
  async function mostrarTaskPesquisada(pesquisa: String){
    try{
    const task = await Tasks.findOne(pesquisa)

    return task
} catch (e) {
        console.log(e);
        throw new Error(e);
      }
  }
      
  async function editarTask(id_task: String, data: any) {
    try{
    const task = await Tasks.update(data, {where: {id: id_task}})

    return task
} catch (e) {
        console.log(e);
        throw new Error(e);
      }
  }
  
 async function deletarTask(id_task: String){
    try{
        const task = await Tasks.delete({where:{id: id_task}})

        return task
    } catch (e) {
        console.log(e);
        throw new Error(e);
      }
 }
  
 async function concluirTask(id_task: String, date: Date){
    try{
        const task = await Tasks.update(date, {where: {id: id_task}})
    }catch (e) {
        console.log(e);
        throw new Error(e);
      }
 }


  module.exports={criarTask, listarTasks,mostrarTaskPesquisada,editarTask,deletarTask,concluirTask}