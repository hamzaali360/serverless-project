module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password || req.body.password
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
        // ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        // : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

        let your_response;

        if(password == "letmein"){
            your_response = "Access granted."
        }
        else{
            your_response = "Access denied."
        }
    //     let your_response= (password == "letmein")?
    //    "Access granted." : "Access denied."
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: your_response
    };
}