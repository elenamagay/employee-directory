import React from "react";
import './table.css';

function Table(props) {
    return (
        <div className="jumbotron">
            <table className="table">
                <thead>
                    <tr className='header'>
                        <th>
                            <button onClick={props.employeesSortedByFName}>First Name</button>
                        </th>
                        <th>
                            <button onClick={props.employeesSortedByLName}>Last Name</button>
                        </th>
                        <th>
                            <button onClick={props.employeesSortedByEmail}>Email</button>
                        </th>
                        <th>
                            <button onClick={props.employeesSortedByPhone}>Phone</button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {props.results.map(sort => (
                        <tr key={ sort.login.uuid }>
                            <td>{sort.name.first}</td>
                            <td>{sort.name.last}</td>
                            <td>{sort.email}</td>
                            <td>{sort.phone}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
        
        
    );
}

export default Table;