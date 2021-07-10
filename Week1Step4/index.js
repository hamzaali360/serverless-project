const fetch = require('node-fetch')

function generate_name(){
    var names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
    var random_number = Math.floor(names.length * Math.random());
    var random_name = names[random_number];

    return random_name;
}

// function generate_cat(){
//     let endpoint = "https://cataas.com/cat/cute/says/Bitcamp"
//     let resp = await fetch(endpoint, {
//         method: 'GET'
//     });
    
//     let data = await resp.arrayBuffer();
//     // we need to receive it as a buffer since this is an image we are receiving from the API
//     // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
    
//     base64data = Buffer.from(data).toString('base64');

//     return base64data;
// }
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

 

    let name1 = generate_name();
    let name2 = generate_name();
    
    let endpoint = "https://cataas.com/cat/cute/says/Bitcamp"
    let resp1 = await fetch(endpoint, {
        method: 'GET'
    });
    
    let data1 = await resp1.arrayBuffer();
    
    base64data1 = Buffer.from(data1).toString('base64');

    let resp2 = await fetch(endpoint, {
        method: 'GET'
    });
    
    let data2 = await resp2.arrayBuffer();
   
    
    base64data2 = Buffer.from(data2).toString('base64');
    //let base64data1 = generate_cat();
    //let base64data2 = generate_cat();

context.res = {
    // status: 200, /* Defaults to 200 */
    
    body: {
        cat1: base64data1,
        cat2: base64data2,
        names: [name1, name2]
    }
};
 
}