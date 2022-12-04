import React, { Component } from 'react'
import './TaskForm.css';
//import util from './util';
import TaskTable from './TaskTable';

export default class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            desc:'',
            ddate:'',
            status:''
        }
        //console.log("Data :" + this.props.data);
    }


    eventChange = (event) => {
        //const ename = event.target.name;
        const evalue = event.target.value.toLowerCase();
        event.target.value = [evalue];
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
                            <th><input type="button" id="btnAdd" key="keyAdd" defaultValue="+" /></th>
                        </tr>
                        <TaskTable data={this.props.data}/>
                    </tbody>
                </table>
            </form>
        );
    } 
}