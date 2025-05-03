import React, { useState } from 'react';

function FileUpload(){
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
    if (!selectedFile) {
        alert("Please select a file!");
        return;
    }
    if (selectedFile) {
    // Send the file to your server using an API call
    // ...
    }
    };

    return (
        <div class="row md-6">
            <input type="file" onChange={handleFileChange}></input>
            <button class="btn btn-primary" onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;