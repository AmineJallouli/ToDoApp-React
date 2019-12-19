import React, { Component } from 'react';
import './App.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[],
            Item:"",
            Completed:false
         }
    }

    

    addItems = () =>{
        
        let newitem = {id:Math.random() , Item: this.state.Item,Completed:false}
        this.setState({
            items: [...this.state.items,newitem]
          })
    }


    Delete = (id) =>{
        this.setState({
            Item:"",
            items:this.state.items.filter(el=> el.id!==id)
        })
    }

    Modify=(id)=>
    {
        this.setState({
            items: this.state.items.map(el=>{
                if(el.id===id) {
                    return {
                        ...el,
                        Completed:!el.Completed  
                    }
                    
                }else {
                    return el;
                  }
           })
        })
    }


    render() { 
        return ( <div>
            <header>
        <div> 
          <h1>To-Do App</h1>
          <h3>Add new To-Do</h3>
          <input type="text" id="txt" onChange={(event)=>{this.setState({Item:event.target.value})}} placeholder="Enter new task"/>
          <span id="btn-add" onClick={this.addItems}>Add</span>
        </div>
      </header>
    <main>
        <h2>Let's get some work done!</h2>
        <ul id="list">{this.state.items.map(el =>{ return(
        
            <div key={el.id}>
                <li className={el.Completed ? "style1":"style2"}>{el.Item}</li>
                <button onClick={()=>{this.Modify(el.id)}}>{el.Completed ?"UNDO":"COMPLETE"}</button>
                <button onClick={()=>this.Delete(el.id)}>DELETE</button>
            </div>
        )
                        
        })
             
        }
           
        </ul>
    </main>
        </div> );
    }
}
 
export default Todo;