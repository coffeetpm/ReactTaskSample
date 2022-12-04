import './Main.css';
import TaskForm from './Table/TaskForm';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

function Main() {
    
    let [TaskDataset, setListItem] = React.useState();
    const getAPI = "http://localhost:3001/get_all_items";

    // Fetch Data From Backend API
    React.useEffect(() => {

        fetch(getAPI)
            .then((response)=>response.json())
            .then((data)=> setListItem(data));
    },[]);

    if(TaskDataset===undefined){
        return <> Loading...</>;
    } 
 
    // Main DOM 
    return (
        <div className="Main">
        <header className="Main-header">
            <div className="Main-Title">Task Management System</div>
            <br />
            <TaskForm key="Taskform" data={TaskDataset} />
            <input type="button" className="Main-Refresh" value="Refresh" />
        </header>
        </div>
    );
}

export default Main;
