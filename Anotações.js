// isNAN() = retorna se o valor NÃO é um numero

// math.floor() = Remove as casas decimais.'
// ___________________________________________________

// fetch('URL') - Pendente
//     .then () - Sucesso
//     .catch() - Falha
______________________________________________________

try{
    const requestResult = await fetch ('url');
    const jsonResult = await requestResult.json();
    return jsonResult
} catch (error) {
    console.error("ERR0R")
}

