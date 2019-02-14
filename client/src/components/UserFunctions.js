import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            company_name: newUser.company_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
        })
}

export const login = user => {
    return axios
        .post('/users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            
            localStorage.setItem('usertoken', JSON.stringify(res.data))
            console.log(res.data);
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

