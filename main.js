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

    addJournalEntry();
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
    // else  {
    //     txt = "You Pressed Cancel!";
    // }

    journalEntries.push(create_Date);
    journalEntries.push(confidence_Level);
    journalEntries.push(entry_journal);
    

    for (let index = 0; index < addJournalEntry.length; index++) {
        
        console.log(`creationDate:${create_Date}, journalEntry:${entry_journal}, levelConfidence:${confidence_Level}`);
    }

}

function logJournalEntries() {
    
}





// function entries(newArray){

// let journalEntries = ['Creation Date, Confidence Level, Journal Entry, Post'];

    

// }


// main();


