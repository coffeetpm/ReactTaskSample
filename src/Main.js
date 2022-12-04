import './Main.css';
import TaskForm from './Table/TaskForm';
import setData from './Table/SetData';
import delData from './Table/DelData';
import Email from './Table/Email'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

function Main() {
    // init
    const getAPI = "http://localhost:3001/get_all_items";
    const setAPI = "http://localhost:3001/update_all_items";
    const delAPI = "http://localhost:3001/delete_items";
    const emailAPI = "http://localhost:3001/sendEmail";
    var targetEmail = "testing@methodworx.com";
    const [, updateState] = React.useState();
    var [TaskDataset = [], setListItem] = React.useState();

    // React use Effect, Added onchange/onclick event of main page
    React.useEffect(() => {

        fetch(getAPI)
            .then((response)=>response.json())
            .then((data)=> setListItem(data));
        
        // Event Listner of Dom Object.
        window.addEventListener('click', 
            function(event) { 
                var cid = event.target.id.toString();
                    cid = cid.substring(cid.indexOf("_")+1);

                // Change the task status
                if(event.target.type === 'checkbox')
                {
                    if(TaskDataset.status === "")
                    {
                        TaskDataset.status = "checked";
                    }
                    else
                    {
                        TaskDataset.status = "";
                    }
                    
                    updateState({});
                }
                // Refresh the list
                else if(event.target.value === 'Refresh')
                {
                    
                    updateState({});
                }
                // Remove item
                else if(event.target.value === 'X')
                {
                    document.getElementById("tr_" + cid).remove();
                    TaskDataset.splice(cid, 1);
                    delData(delAPI,parseInt(cid)-1);
                }
                // Save item
                else if(event.target.value === 'S')
                {
                    var newid = parseInt(cid);
                    TaskDataset[cid] = {   id:newid,
                                        title:document.getElementById("title_" + newid).value,
                                        desc:document.getElementById("desc_" + newid).value,
                                        ddate:document.getElementById("date_" + newid).value,
                                        status:document.getElementById("status_" + newid).value
                                    };
                                    //console.log(TaskDataset);
                    setData(setAPI,TaskDataset);
                }
                // Add item
                else if(event.target.value === '+')
                {
                    const title = document.getElementById("tbTitle").value;
                    const desc = document.getElementById("tbDesc").value;
                    const ddate = document.getElementById("tbDDate").value;

                    if(title && desc && ddate)
                    {
                        var iHighestNumber = 0;
                        for (const element of TaskDataset)
                        {
                            if(parseInt(element.id) > iHighestNumber)
                            {
                                iHighestNumber = parseInt(element.id);
                            }
                        };
                        var dataSize = ++iHighestNumber;
                        const addItem =   { id:dataSize,
                                            title:document.getElementById("tbTitle").value,
                                            desc:document.getElementById("tbDesc").value,
                                            ddate:document.getElementById("tbDDate").value,
                                            status:''
                                        };
                                        TaskDataset.push(addItem);
                        setData(setAPI,TaskDataset);
                        Email(emailAPI, targetEmail);
                        
                        updateState({});
                    }
                }
                event.stopImmediatePropagation();
            }, false);
    });

    if(TaskDataset===undefined){
        return <> Loading...</>;
    }
 
    // Main DOM 
    return (
        <div className="Main">
        <header className="Main-header">
            <div className="Main-Title">Task Management System</div>
            <br />
            <TaskForm key="Taskform" data={TaskDataset}/>
            <input type="button" className="Main-Refresh" value="Refresh" />
        </header>
        </div>
    );
}

export default Main;
