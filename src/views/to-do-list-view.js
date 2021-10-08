class ToDoListView {
  #parentEl = document.querySelector('#root');

  addHandlerRender(handler) {
    ['load'].forEach(ev => window.addEventListener(ev, handler));
  }

  render(data) {
    let markup = data
      .map(
        (item) =>
          `<div class='item'  key =${item.id}>
                <div> ${item.title} </div> 
                <div> ${item.completed} </div> 
             </div>
            `
      )
      .join(' ');

    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ToDoListView()
