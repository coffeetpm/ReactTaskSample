import React, { Component } from 'react'
import setData from './SetData';
import delData from './DelData';



export default class TaskTable extends Component {
    
    // init
    constructor(props) {
        super(props);
        this.state = {
            delAPI : "http://localhost:3001/delete_items",
            setAPI : "http://localhost:3001/update_all_items"
        };
    }

    // button and checkbox click event
    handleChange = (event) => {
        const   data = this.props.data;
        let     cid = event.target.id.toString();
                cid = cid.substring(cid.indexOf("_")+1);

        // Change the task status
        if(event.target.type === 'checkbox')
        {
            if(data.status === "")
            {
                data.status = "checked";
            }
            else
            {
                data.status = "";
            }
                    
             //updateState({});
        }
        // Remove item
        else if(event.target.value === 'X')
        {
            document.getElementById("tr_" + cid).remove();
            data.splice(cid, 1);
            delData(this.delAPI,parseInt(cid)-1);
        }
        // Save item
        else if(event.target.value === 'S')
        {
            let newid = parseInt(cid);
            data[cid] = {   id:newid,
                            title:document.getElementById("title_" + newid).value,
                            desc:document.getElementById("desc_" + newid).value,
                            ddate:document.getElementById("date_" + newid).value,
                            status:document.getElementById("status_" + newid).value
                        };
                                    //console.log(TaskDataset);
            setData(this.setAPI,data);
        }
        event.stopImmediatePropagation();
    };

    render() {
        const data = this.props.data;
        const handleChange = this.handleChange;

        return data.map(function(column_data){
            return (
                <tr id={'tr_' + column_data.id} key={'trkey_' + column_data.id}>
                    <th><input type="checkbox" id={'tr_' + column_data.id} key={'status_' + column_data.id} defaultChecked={column_data.status} onClick={handleChange} /></th>
                    <th><input type="text" id={'tr_' + column_data.id} key={'title_' + column_data.id} defaultValue={column_data.title} /></th>
                    <th><input type="text" id={'tr_' + column_data.id} key={'desc_' + column_data.id} defaultValue={column_data.desc} /></th>
                    <th><input type="date" id={'tr_' + column_data.id} key={'date_' + column_data.id} defaultValue={column_data.ddate} /></th>
                    <th><input type="button" key={'savekey_' + column_data.id} defaultValue="S"  onClick={handleChange} /></th>
                    <th><input type="button" key={'delkey_' + column_data.id} defaultValue="X"  onClick={handleChange} /></th>
                </tr>
            )
        })
    }
}
