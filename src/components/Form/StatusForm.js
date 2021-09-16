import React, { useRef } from "react";


const StatusForm = () => {
    const statusForm = useRef();
    const handleSubmit = () => {
        const data = statusForm.current;
        localStorage.setItem('status', data['status'].value)
    }
    const statusText = localStorage.getItem('status');

    return(
        <div>
            <form onSubmit={handleSubmit} ref={statusForm}>
                <label>Status</label>
                <textarea name="status" defaultValue={statusText}>
                </textarea>
                <button>Update</button>
            </form>
        </div>
    );
}

export default StatusForm;