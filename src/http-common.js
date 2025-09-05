import axios from "axios"

export default axios.create({

    baseURL: "https://notesphere-backend-a6ek.onrender.com",
    headers: {
        "Content-Type": "application/json"
        
    }

})