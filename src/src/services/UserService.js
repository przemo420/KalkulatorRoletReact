const prodUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/' : 'https://rolety.sztosit.eu/api/';

export async function getStartConfig() {
    const response = await fetch( prodUrl + 'start' );
    
    return response.json();
}

export async function updateFormData( data, type ) {
    const response = await fetch( prodUrl + 'form-'+type, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "X-Requested-With": "XMLHttpRequest" },
        body: JSON.stringify( data )
    });
    return await response.json();
}