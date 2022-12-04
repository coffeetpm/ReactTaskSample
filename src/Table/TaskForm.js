import React, { Component } from 'react'
import './TaskForm.css';
//import util from './util';
import TaskTable from './TaskTable';
import Email from './Email'
import setData from './SetData';

export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            desc:'',
            ddate:'',
            status:''
        };
    }

    setAPI = "http://localhost:3001/update_all_items";
    emailAPI = "http://localhost:3001/sendEmail";
    targetEmail = "testing@methodworx.com";

    eventChange = (event) => {
        //const ename = event.target.name;
        const evalue = event.target.value.toLowerCase();
        event.target.value = [evalue];
    }

    AddChange = (event) => {
        if(event.target.value === 'Refresh')
        {
                //updateState({});
        }// Add item
        else if(event.target.value === '+')
        {
            const title = document.getElementById("tbTitle").value;
            const desc = document.getElementById("tbDesc").value;
            const ddate = document.getElementById("tbDDate").value;

            if(title && desc && ddate)
            {
                let iHighestNumber = 0;
                for (const element of this.props.data)
                {
                    if(parseInt(element.id) > iHighestNumber)
                    {
                        iHighestNumber = parseInt(element.id);
                    }
                };
                let dataSize = ++iHighestNumber;
                const addItem =   { id:dataSize,
                                    title:title,
                                    desc:desc,
                                    ddate:ddate,
                                    status:''
                                };
                this.props.data.push(addItem);
                console.log(this.setAPI);
                setData(this.setAPI,this.props.data);
                Email(this.emailAPI, this.targetEmail);
                
                //updateState({});
            }
        }
        
    }

    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Title</th> 
                            <th>Description</th>
                            <th>Due Date</th>
                            <th />
                        </tr>
                        <tr>
                            <th />
                            <th><input type="text" id="tbTitle" key="keyTitle" value={this.title} placeholder="New Title" onChange={this.eventChange}/></th> 
                            <th><input type="text" id="tbDesc" key="keyDesc" value={this.desc} placeholder="New Description" onChange={this.eventChange}/></th> 
                            <th><input type="date" id="tbDDate" key="keyDDate" value={this.ddate} placeholder="New Due Date" onChange={this.eventChange}/></th> 
                            <th><input type="button" id="btnAdd" key="keyAdd" defaultValue="+" onClick={this.AddChange}/></th>
                        </tr>
                        <TaskTable data={this.props.data}/>
                    </tbody>
                </table>
            </form>
        );
    } 
}