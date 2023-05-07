import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {

task
taskId


@track
toDoList = [
  //  {   id : 0,
  //      subject : "" ,
   //  },
]

addList(event){
    this.task = event.target.value
}



handleClick(e){
let gorev = {
                id : this.toDoList.length+1,
                subject : this.task 

}
    this.toDoList.push(gorev)
    this.taskId = id
    this.task = ""
}



handleDelete(e){
    let deleteId = e.target.name
    let toDoList = this.toDoList;
    let deleteIndex
console.log("deleteId " + deleteId)

for(let i=0; i<this.toDoList.length; i++){
if(deleteId === this.toDoList[i].id){
    deleteIndex = i
    console.log("deleteIndex " + deleteIndex)
    console.log("todolist " + this.toDoList[i])
}
}
this.toDoList.splice(deleteIndex,1)
}
}