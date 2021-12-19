
const fs = require('fs');

function extractEmails () {

    fs.readFile('names.txt', 'utf8', (err, data)=>{
  
   extractEmailAddress =  data.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);

    const dedupe = extractEmailAddress.filter((data,index)=>{
        return extractEmailAddress.indexOf(data) === index;
      })
   
      const strip = dedupe.sort().toString();

      fs.writeFile('namesFixed.txt', strip, (error) => {
      
        // In case of a error throw err exception.
        if (error) throw err;
    })

    console.log(`\n A nice clean list of email addresses extracted from a text document: \n \n ${strip} \n` );

});
     
}
  extractEmails();