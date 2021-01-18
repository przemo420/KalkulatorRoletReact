const prodUrl = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://cors-anywhere.herokuapp.com/http://rolety.sztosit.eu';

export async function getStartConfig() {
    const response = await fetch( prodUrl + ':3080/api/start' );
    
    return response.json();
}

export async function updateFormData(data) {
    const response = await fetch( prodUrl + ':3080/api/form/calc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "X-Requested-With": "XMLHttpRequest" },
        body: JSON.stringify( data )
    });
    return await response.json();
}