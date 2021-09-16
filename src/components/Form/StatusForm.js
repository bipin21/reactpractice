import React, { useRef } from "react";


const StatusForm = () => {
    const statusForm = useRef();
    const handleSubmit = () => {
        const data = statusForm.current;
        localStorage.setItem('status', data['status'].value)
    }
    const statusText = localStorage.getItem('status');

    return(
        <div className="status">
            <form onSubmit={handleSubmit} ref={statusForm}>
                <label>Status</label>
                <p> -- {statusText}</p>
                <textarea name="status" defaultValue={statusText}>
                </textarea>
                <button>Update</button>
            </form>
        </div>
    );
}

export default StatusForm;