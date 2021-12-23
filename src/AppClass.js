import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choreList: [],
            choreInput: ''
        };
    }

    render() {
        let choreList = this.state.choreList;
        let choreInput = this.state.choreInput;

        return (
            <>
              <div className="App"> To Do List</div>
              <div id="description"> add chores</div>
              <input id="inputbox" type= "text" placeholder='add chores here'
                    onChange={(event) => {
                      const typedLetter = event.target.value;
                      this.setState({
                          choreInput: typedLetter,
                      })
                    }}
              >
          
              </input>
              <div>
                {choreList.map((chore) => <div>{chore}</div>)}
              </div>
              <button id='clickbutton' onClick={() => {
                this.setState({
                    choreList: [...choreList, choreInput],
                })
    
              }
            }> Click Here!!!</button>
            </>
          );
    }
}


export default AppClass;
