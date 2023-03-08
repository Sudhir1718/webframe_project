import axios from 'axios'

const ROCKET_API_BASE_URL = "http://localhost:2023/"

class RocketService{

    saveRocket(cricket){
        return axios.post(ROCKET_API_BASE_URL + "add", cricket  );
    }
    
    // getRocket(id){
        
    // }
    
    getRockets(){
        return axios.get(ROCKET_API_BASE_URL + "show");
    }
    
    deleteRocket(id){
        return axios.delete(ROCKET_API_BASE_URL+"delete/"+id);
    }
    
    updateRocket(id,cricket){
        return axios.put(ROCKET_API_BASE_URL+"update/"+id,cricket);
    }
    
    getRocketById(id){
        return axios.get(ROCKET_API_BASE_URL + "show/" + id);
    }
    
}

export default new RocketService();