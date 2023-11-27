export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Adityarana007') ;
    return response.json()  
}