// alert("Enter Now!!")

document.getElementById('journal')

let journalDiv = document.getElementById('journal');

let journal = document.createElement('div');

let journalText = document.createTextNode('Journal Entries!!');

journal.appendChild(journalText);


journal.classList.add('journal')

journalDiv.appendChild(journal);

journalDiv.style.textAlign = 'center';
journalDiv.style.fontSize = '50px';
journalDiv.style.fontFamily = 'fantasy';
journalDiv.style.color = 'yellow';
journalDiv.style.borderStyle = 'double';
journalDiv.style.borderColor = 'black';



// ****************


document.getElementById('my button')

// let buttonEl = getElementById('button');
// buttonEl.addEventListener('Add Journal Entries', buttonClick)


function main() {
    // console.log(buttonEl)
    buttonClick(evt);
    
    addJournalEntry();

    logJournalEntries();

    // render();
    // logJournalEntries.render();

    // logJournalEntries();
}
function buttonClick(evt) 
{

let entries = prompt("Let me know how you feel");
    for (let i = 0; i < entries; i++) {
        console.log(entries);
    }

alert('Please fill out upcoming fields')

// addJournalEntry();

let buttonEl = document.getElementById('mybutton').addEventListener('Add Journal Entries', buttonClick)
    // buttonEl.addEventListener('Add Journal Entries', buttonClick)
    console.log(buttonEl);
    
    logJournalEntries();

}





// let buttonEl = document.getElementById('mybutton');
//     buttonEl.addEventListener('Add Journal Entries', buttonClick)

function addJournalEntry(create_Date, entry_journal, confidence_Level) {
let journalEntries =  {
    
    creationDate: create_Date,
    journalEntry: entry_journal,
    levelConfidence: confidence_Level,

  
    
    }

    console.log(journalEntries);
    
    window.confirm('OK');
    if (confirm("OK")) {
        txt = "Thank You!!";
    } 
    else  {
        txt = "You Pressed Cancel!";
    }

    journalEntries.push(create_Date);
    journalEntries.push(confidence_Level);
    journalEntries.push(entry_journal);
    

    for (let index = 0; index < addJournalEntry.length; index++) {
        
        console.log(`creationDate:${create_Date}, journalEntry:${entry_journal}, levelConfidence:${confidence_Level}`);
    }

}



// document.getElementById('journalresponse')

// let entryPara = document.getElementById('journalresponse');

// let entryP = document.createElement('p');

// let entryPText = document.createTextNode('Entries')

// entryP.appendChild(entryPText);

// entryP.classList.add('journalresponse');

// // entryPara.appendChild(entryP);


// document.createElement('li');

// let responseJournal = document.getElementById('response');

// let responseJournalText = document.createTextNode('Date: Confidence: Entry:')

// // responseJournal.appendChild(responseJournalText);


function logJournalEntries() {
let creationDate = prompt("Today's Date");
    for (let b = 0; b < creationDate; b) {
        console.log(creationDate);

        alert("Enter Date!!") 
    }

let levelConfidence = prompt(creationDate +  "How confident are you: Low, Medium or High?");
for (let a = 0; a < levelConfidence; a) {
    console.log(levelConfidence);

    alert("Enter Confidence Level!!")
    
}


let journalEntry = prompt(creationDate + levelConfidence + "Enter your reflection");
for (let c = 0; c < journalEntry; c) {
    console.log(journalEntry);

    alert("Enter a reflection here!!")
    
}

// attempts = 0;
// var correct = false;
// while(correct == false){
let confirm = prompt(creationDate + levelConfidence + journalEntry + "Do you want to enter another Journal?");
for (let d = 0; d < confirm; d) {
    console.log(confirm);
   
 if (response == 'yes'){
    // return logJournalEntries;
    correct = true;

    alert("Are you done?")

    return logJournalEntries;

    // correct = true;
}

else (response == 'quit');

}

let myNodeList =
document.querySelectorAll("p");

for (let y = 0; y < myNodeList.length; y++)
console.log(myNodeList);

let responseToJournal = [creationDate, levelConfidence, journalEntry];
let txt = "";
responseToJournal.forEach(logJournalEntries);

function logJournalEntries(value) {
    txt += value + "<p>";

console.log(responseToJournal);
}



// logJournalEntries.render(); {
//     this.logJournalEntries;
//     let unorderedList = document.getElementById('journalresponses');
//     for (let z = 0; z < logJournalEntries.length; z++) {
//         let listItem = document.createElement('li');
//         listItem.textContent = logJournalEntries[z] + ';' + buttonClick[z];
//         unorderedList.appendChild(listItem);
    
//     }
// logJournalEntries.render();
document.getElementById('journalresponse')

let entryPara = document.getElementById('journalresponse');

let entryP = document.createElement('p');

let entryPText = document.createTextNode('Entries')

entryP.appendChild(entryPText);

entryP.classList.add('journalresponse');

entryPara.appendChild(entryP);


document.createElement('li');

let responseJournal = document.getElementById('date');

let responseJournalText = document.createTextNode('Date:')

responseJournal.appendChild(responseJournalText);



document.createElement('li');

let responseJournal2 = document.getElementById('confidence');

let responseJournalText2 = document.createTextNode('Confidence:')

responseJournal2.appendChild(responseJournalText2);
    


document.createElement('li');

let responseJournal3 = document.getElementById('entry');

let responseJournalText3 = document.createTextNode('Entry:')

responseJournal3.appendChild(responseJournalText3);
}





// console.log(confirm);


// show() {
//     this.logJournalEntries;
//     let unorderedList = document.getElementById('journalresponses');
//     for (let z = 0; z < logJournalEntries.length; z++) {
//         let listItem = document.createElement('li');
//         listItem.textContent = logJournalEntries[z] + ';' + buttonClick[z];
//         unorderedList.appendChild(listItem);
//     }


// render(); {
//     this.logJournalEntries;
//     let unorderedList = document.getElementById('journalresponses');
//     for (let z = 0; z < logJournalEntries.length; z++) {
//         let listItem = document.createElement('li');
//         listItem.textContent = logJournalEntries[z] + ';' + buttonClick[z];
//         unorderedList.appendChild(listItem);
    
//     }



    

