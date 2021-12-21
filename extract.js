
const fs = require('fs');

function extractEmails () {

    fs.readFile('rawEmailFile.txt', 'utf8', (err, data)=>{
  
   extractEmailAddress =  data.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);

    const dedupe = extractEmailAddress.filter((data,index)=>{
        return extractEmailAddress.indexOf(data) === index;
      })
   
      const sorted = dedupe.sort().toString();

      fs.writeFile('fixedEmailFile.txt', sorted, (error) => {
      
        //Throw and error if an exception arises.
        if (error) throw err;
    })

    console.log(`\n The programme will output a clean list of email addresses extracted from a text document: \n \n ${strip} \n` );
  

});
     
}
  extractEmails();