//const prodUrl = 'https://cors-anywhere.herokuapp.com/http://rolety.sztosit.eu';
const devUrl = 'http://localhost';

export async function getStartConfig() {
    const response = await fetch( devUrl + ':3080/api/start' );
    
    return response.json();
}

export async function updateFormData(data) {
    const response = await fetch( devUrl + ':3080/api/form/calc', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( data )
    });
    return await response.json();
}