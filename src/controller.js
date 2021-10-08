import toDoListView from "./views/to-do-list-view";
import * as model from './model'

async function controlToDoList() {
     await  model.getToDOList()
     toDoListView.render(model.state.toDoList)
}


const init = function () {
     toDoListView.addHandlerRender(controlToDoList);
};

init();