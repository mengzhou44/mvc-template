import axios from "axios"

export let state = {
     toDoList: []
}


export const getToDOList = async function() {
     
      try{
          const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

          state = {
              ...state,
              toDoList: res.data
          }
      }
      catch(err) {
             console.log('Network failure!')
      }

}