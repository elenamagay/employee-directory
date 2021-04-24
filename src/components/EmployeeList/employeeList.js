import React from "react";
import Table from "../Table/table";
import Search from "../Search/search";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


class EmployeeList extends React.Component {
    state = {
        allEmployees: [],
        search: "",
        filteredEmployees: [],
        loaded: false
    };
    

    componentDidMount() {
        uuidv4();
        axios.get("https://randomuser.me/api/?results=25&nat=us,dk,fr,gb,au,br,ca,nz")
        .then(sort => {
            console.log(sort);
            this.setState({ allEmployees: sort.data.results, filteredEmployees: sort.data.results, loaded: true})
            console.log(this.state.allEmployees);
        })
        .catch(err => {
            throw err
        })
    };

    handleInputChange = event => {
        const searchAll = event.target.value;
        console.log(this.state.filteredEmployees);
        const filterAll = this.state.allEmployees.filter(employee => {
            const object = {
                name: `${employee.name.first} ${employee.name.last}`,
                email: employee.email,
                phone: employee.phone
             }
            let employees = Object.values(object).join("").toLowerCase();
            console.log(employee);
            return employees.indexOf(searchAll.toLowerCase()) !== -1
        });
        
        this.setState({
            filteredEmployees: filterAll
        });
    };

    employeesSortedByFName =() => {
        const sortByFName = this.state.allEmployees.sort((one, two) => 
            one.name.first.localeCompare(two.name.first)
        );
        this.setState({
            allEmployees: sortByFName
        });
    };

    employeesSortedByLName =() => {
        const sortByLName = this.state.allEmployees.sort((one, two) => 
            one.name.last.localeCompare(two.name.last)    
        );
        this.setState({
            allEmployees: sortByLName
        });
    };

    employeesSortedByEmail =() => {
        const sortByEmail = this.state.allEmployees.sort((one, two) => 
            one.email.localeCompare(two.email)      
        );
        this.setState({
            allEmployees: sortByEmail
        });
    };

    employeesSortedByPhone =() => {
        const sortByPhone = this.state.allEmployees.sort((one, two) => 
            one.phone.localeCompare(two.phone)            
        );
        this.setState({
            allEmployees: sortByPhone
        });
    };

    render() {
        return (
            <div>
                <Search handleInputChange={ this.handleInputChange } />
                {this.state.loaded ?
                <Table                 
                employeesSortedByFName = { this.employeesSortedByFName } 
                employeesSortedByLName = { this.employeesSortedByLName } 
                employeesSortedByEmail = { this.employeesSortedByEmail } 
                employeesSortedByPhone = { this.employeesSortedByPhone }
                results = { this.state.filteredEmployees }
                /> :
                <p>Wait</p>}
            </div>
        )
    };

};

export default EmployeeList;