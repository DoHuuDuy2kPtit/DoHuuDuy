// Ex 4: 

let devDictionary = {
    debug :`The process of figuring out why your program has a certain error and how to fix it`,
    done: `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
    defec: `The formal word for ‘error’`,
    pm: `The short version of Project Manager, the person in charge of the final result of a project`,
    ui_ux : `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`
};
let loop = 0;

while(true) {
    alert("Hi there, this is dev dictionary");

    let keyWord = prompt("Enter a keyword");
    let check = 0;
    
    for (const x  in devDictionary) {
        if(x == keyWord) { 
            check = 1; 
            alert(`${x} - ${devDictionary[x]}`);
        } 
    }
    
    if(check === 0) {
        let explanation = prompt(`We could not find your word: ${keyWord}, leave your explanation`);
        if(explanation == "") explanation = "Empty!";
        devDictionary[keyWord] = explanation; 
        alert("Done");
    }
    ++loop;
    if(loop == 5) break;
}