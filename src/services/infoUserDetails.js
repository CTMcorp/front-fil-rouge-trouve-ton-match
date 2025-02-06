import axios from 'axios';
import { useEffect, useState } from 'react';

const client = axios.create({
    baseURL: 'http://localhost:8080',
    // autres configurations si nécessaire
});

// Intercepteur de réponse pour stocker le jeton d'accès
client.interceptors.response.use(
    (response) => {
        if (response.data.accessToken) {
            sessionStorage.setItem('accessToken', response.data.accessToken);
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Fonction pour obtenir les détails de l'utilisateur
export const getUserDetails = async () => {
    try {
        const token = sessionStorage.getItem('accessToken');
        const response = await client.get('/auth/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data
    } catch (error) {
        return Promise.reject(error);
    }
};

export const useEmail = () => {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        getUserDetails()
            .then(data => setEmail(data.email))
            .catch(error => console.error('Erreur lors de la récupération de l\'email:', error));
    }, []);

    return email;
};

export const useFirstName = () => {
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    getUserDetails().then(data => setFirstName(data.firstname)).catch(error => console.error('Erreur lors de la récupération du prénom:', error));
  }, []);

  return firstName;
};

export const useLastName = () => {
    const [lastName, setLastName] = useState(null);
    
    useEffect(() => {
        getUserDetails().then(data => setLastName(data.lastname)).catch(error => console.error('Erreur lors de la récupération du nom de famille:', error));
    }, []);
    
    return lastName;
}

export const useRole = () => {
    const [role, setRole] = useState(null);
    
    useEffect(() => {
        getUserDetails().then(data => setRole(data.role)).catch(error => console.error('Erreur lors de la récupération du rôle:', error));
    }, []);
    
    return role;
}

export const useFullName = () => {
    const [name, setName] = useState({ firstName: null, lastName: null, fullName: null });
  
    useEffect(() => {
      getUserDetails()
        .then(data => {
          const firstName = data.firstname;
          const lastName = data.lastname;
          setName({ 
            firstName: firstName, 
            lastName: lastName, 
            fullName: `${firstName} ${lastName}` 
          });
        })
        .catch(error => console.error('Erreur lors de la récupération du nom entier:', error));
    }, []);
  
    return name;
}