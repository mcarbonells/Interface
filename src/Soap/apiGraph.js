module.exports = {
    apiUrl: 'https://3.90.88.218/graphql',
    queries: {
        getUserByEmail: 
        ` query{
            getUserByEmail(email: $email){
              id
              email
              name
              nickname
              image
            }
        }`
    }
}