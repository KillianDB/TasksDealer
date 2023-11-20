import Task from './database'

async function criarTask(task) {
    try {
      let novaTask = await Task.create(
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
    const tasks = await Task.findAll()

    return tasks
} catch (e) {
        console.log(e);
        throw new Error(e);
      }
  }
       
  async function mostrarTaskPesquisada(pesquisa){
    try{
    const task = await Task.findOne(pesquisa)

    return task
} catch (e) {
        console.log(e);
        throw new Error(e);
      }
  }
      
  async function editarTask(id_task, data) {
    try{
    const task = await Task.update(data, {where: {id: id_task}})

    return task
} catch (e) {
        console.log(e);
        throw new Error(e);
      }
  }
  
 async function deletarTask(id_task){
    try{
        const task = await Task.delete({where:{id: id_task}})

        return task
    } catch (e) {
        console.log(e);
        throw new Error(e);
      }
 }
  
 async function concluirTask(id_task, date){
    try{
        const task = await Task.update(date, {where: {id: id_task}})
    }catch (e) {
        console.log(e);
        throw new Error(e);
      }
 }


  module.exports={criarTask, listarTasks,mostrarTaskPesquisada,editarTask,deletarTask,concluirTask}