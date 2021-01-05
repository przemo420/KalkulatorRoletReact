export async function getStartConfig() {
    const response = await fetch( 'https://cors-anywhere.herokuapp.com/http://rolety.sztosit.eu:3080/api/start' );

    return response.json();
}

export async function createUser(data) {
    const response = await fetch( 'http://rolety.sztosit.eu:3080/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}