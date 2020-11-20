module.exports = {
    apiUrl: 'https://3.90.88.218:5000/graphql',
    queries: {
        getUserByEmail: 
        ` query{
            getUserByEmail(email: string){
              id
              email
              name
              nickname
              image
            }
        }`
    }
}