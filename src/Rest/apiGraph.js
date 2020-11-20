module.exports = {
    apiUrl: 'https://localhost:5000/graphql',
    queries: {
        getUserByEmail: 
        ` {
            getUserByEmail(email: "elusuariodeprueba2@unal.edu.co") {
                id
                email
                name
                nickname
                image
            }
        }`
    }
}