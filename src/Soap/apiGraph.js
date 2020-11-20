module.exports = {
    apiUrl: 'https://3.90.88.218/graphql',
    queries: {
        getUserByEmail: 
        ` query{
            getUserByEmail(email: "elusuariodeprueba2@unal.edu.co"){
              id
              email
              name
              nickname
              image
            }
        }`
    }
}