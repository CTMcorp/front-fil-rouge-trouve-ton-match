import client from "../config/axiosConfig.js";

class SecteursTypesService {
    updateSecteurs = async () => {
        return await client.post('/ttm/me/secteurs/{secteurId}', )
    }
}

export default SecteursTypesService();