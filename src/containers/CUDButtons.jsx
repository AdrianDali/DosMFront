import React from "react";

const CUDButtons = ({ handleAdd, handleDelete, handleUpdate }) => {
    return (
        <div className="row">
        <div className="col-md-4">
            <button className="btn btn-primary" onClick={handleAdd}>
            Add
            </button>
        </div>
        <div className="col-md-4">
            <button className="btn btn-warning" onClick={handleUpdate}>
            Update
            </button>
        </div>
        <div className="col-md-4">
            <button className="btn btn-danger" onClick={handleDelete}>
            Delete
            </button>
        </div>
        </div>
    );
    }
    
    export default CUDButtons;