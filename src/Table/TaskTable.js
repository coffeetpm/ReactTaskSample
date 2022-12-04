import React, { Component } from 'react'

export default class TaskTable extends Component {
    render() {
        return this.props.data.map(function(column_data){
            return (
                <tr id={'tr_' + column_data.id} key={'trkey_' + column_data.id}>
                    <th><input type="checkbox" id={'status_' + column_data.id} key={'stat_' + column_data.id} defaultChecked={column_data.status} /></th>
                    <th><input type="text" id={'title_' + column_data.id} key={'tkey_' + column_data.id} defaultValue={column_data.title} /></th>
                    <th><input type="text" id={'desc_' + column_data.id} key={'dkey_' + column_data.id} defaultValue={column_data.desc} /></th>
                    <th><input type="date" id={'date_' + column_data.id} key={'ddkey_' + column_data.id} defaultValue={column_data.ddate} /></th>
                    <th><input type="button" id={'save_' + column_data.id} key={'savekey_' + column_data.id} defaultValue="S" /></th>
                    <th><input type="button" id={'del_' + column_data.id} key={'delkey_' + column_data.id} defaultValue="X" /></th>
                </tr>
            )
        })
    }
}
