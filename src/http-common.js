import axios from "axios"

export default axios.create({

    baseURL: "https://notesphere-backend-production.up.railway.app/api/",
    headers: {
        "Content-Type": "application/json"
        
    }

})