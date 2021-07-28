const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let blogname = "severlessproject"

    var username = req.headers['username'];
    var download = ""
    var downloadpng = "https://" + blogname + ".blob.core.windows.net/images/" + username + ".png";
    var downloadjpg = "https://" + blogname + ".blob.core.windows.net/images/" + username + ".jpg";
    var downloadjpeg = "https://" + blogname + ".blob.core.windows.net/images/" + username + ".jpeg"; 
   
     
     let jpgresp = await fetch(downloadjpg, {
        method: 'GET',
     })
     let jpgdata = await jpgresp;
 let pngresp = await fetch(downloadpng, {
        method: 'GET',
     })
     let pngdata = await pngresp;

     let jpegresp = await fetch(downloadjpeg, {
            method: 'GET',
         })
          let jpegdata = await jpegresp; 
     
     if (pngdata.statusText == "The specified blob does not exist." && jpgdata.statusText == "The specified blob does not exist." && jpegdata.statusText == "The specified blob does not exist.") {
        success = false;
        context.log("Does not exist: " + pngdata)
        context.log("Does not exist: " + jpgdata)
        context.log("Does not exist: " + jpegdata) 
     }  else if (jpgdata.statusText != "The specified blob does not exist.") {
        success = true;
        download = downloadjpg
        context.log("Does exist: " + jpgdata)
     }else if (pngdata.statusText != "The specified blob does not exist.") {
        success = true;
        download = downloadpng
        context.log("Does exist: " + pngdata)
     }else if (jpegdata.statusText != "The specified blob does not exist.") {
            success = true;
            download = downloadjpeg
            context.log("Does exist: " + jpegdata) 
         } 
     
     context.res = {
        body: {
                 "downloadUri" : download,
                 "success": success,
        }
  };
  context.log(download);
  context.done();
  download = "";
  
}