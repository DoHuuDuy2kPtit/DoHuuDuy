console.log(typeof jobSearch);                     // outermost layer là 1 object;
console.log(typeof jobSearch.hits);                // hits là 1 array;
for(let i = 0; i < jobSearch.hits.length; i++) {
    console.log(`${i+1}
    * Title: ${jobSearch.hits[i].jobTitle} 
    * Locations: ${jobSearch.hits[i].locations} 
    * Salart: ${jobSearch.hits[i].salaryMax} 
    * Benefits: ${jobSearch.hits[i].benefits.reduce((result,value,index)=>{
        for (const x in value) {
            result += `- ${value[x]} `;
        }
        result +='\n';
        return result;
    },"")} 
    * Skills: ${jobSearch.hits[i].skills} 
    * Requirement: ${jobSearch.hits[i].jobRequirement}`);
}