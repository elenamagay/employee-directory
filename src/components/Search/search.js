import React from "react";
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Search(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Start typing to filter employees" id="search" 
                    onChange= { event => props.handleInputChange(event) }
                    />                
                </form>
            </div>
        </nav>
    );
};

export default Search;

