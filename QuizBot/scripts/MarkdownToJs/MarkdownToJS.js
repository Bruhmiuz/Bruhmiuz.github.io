const fs = require('fs');
const path = require('path');

function parseMarkdown(mdContent) {
    const lines = mdContent.split('\n');
    const dialogueSystem = {};
    const compulsoryMessages = [];
    const checkpoints = [];
    let counter = 1;

    let currentEntry = null;
   	let currentKey = null;
   	let inLatexMode = false;
   	let optionNo = 0;
    let compulsoryMessageCount = 0;
   	let sectionName = "default";
   	let addedEmptyNewline = false;
    let needCheckpointId = false;

    function pushCurrentEntry(nextKey) {
        if (currentEntry) {

        	if(currentEntry.type != "dialogue"){
        		currentEntry.next = nextKey;
        	}

        	while(true){
        		currentEntry.content = currentEntry.content.trim();
        		if(currentEntry.content.length <= 4) break;
        		if(currentEntry.content.substring(currentEntry.content.length-4) != "<br>") break;
        		currentEntry.content = currentEntry.content.substring(0, currentEntry.content.length-4);
        	}

        	while(true){
        		currentEntry.content = currentEntry.content.trim();
        		//console.log(typeof(currentEntry.content));
        		let found = currentEntry.content.includes("$$<br> <br>");
        		if(!found) break;
        		currentEntry.content = currentEntry.content.replace("$$<br> <br>", "$$$<br>");
        	}

        	while(true){
        		currentEntry.content = currentEntry.content.trim();
        		let found = currentEntry.content.includes("<br> <br> <br>");
        		if(!found) break;
        		currentEntry.content = currentEntry.content.replace("<br> <br> <br>", "<br> <br>");
        	}



            dialogueSystem[currentKey] = currentEntry;
            
            currentEntry = null;
            
            if(inLatexMode){
            	console.log("WARNING: LATEX NOT CLOSED");
            }



            inLatexMode = false;
            optionNo = 0;
        }
    }

    for (let line of lines) {
        const h3Match = line.match(/^###\s+(\w+)(?:\s+(\S+))?/);
        const h2Match = line.match(/^##\s+/);

        if (h2Match) {
            let lineSplit = line.trim().split(" ");
            sectionName = lineSplit[1];
            sectionLabel = lineSplit.slice(2).join(" ")
            counter = 1;

            needCheckpointId = true;
            checkpointInfo = {}
            checkpointInfo.label = sectionLabel;
            checkpointInfo.showCompulsoryMessages = compulsoryMessageCount;
            checkpointInfo.id = "PLAECEHOLDER";
            checkpoints.push(checkpointInfo);

            continue;
        }

        if (h3Match) {
            // start a new entry
            
            const type = h3Match[1].trim();
            const key = h3Match[2] ? h3Match[2].trim() : `${sectionName}_default_${counter++}`;
            pushCurrentEntry(key);
            currentKey = key;

            if(needCheckpointId){
                checkpoints[checkpoints.length-1].id = key;
                needCheckpointId = false;
            }

            currentEntry = { type };
            if (type === 'mcq' || type === 'single-mcq') {
                currentEntry.options = {};
                currentEntry.answersIdx = [];
            }
            if (type === 'dialogue') {
                currentEntry.options = {};
                currentEntry.respondToIdx = {};
            }
            if (type === 'tex') {
                currentEntry.important = true;
                compulsoryMessages.push(key);
                compulsoryMessageCount += 1;
            }
            if (type === 'embed') {
                currentEntry.previewImage = "images/desmos_thumbnail.jpg";
            }
            currentEntry.content = "";
            continue;
        }

        if (!currentEntry) continue;

       	let nonContentMatch = false;
        if (currentEntry.type === 'mcq' || currentEntry.type === 'single-mcq') {
        	line = line.trim();
            if (line.charAt(0) === '*' || line.charAt(0) === '-') {
                currentEntry.options[optionNo] = line.substring(2).trim();
                
                if(line.charAt(0) === '*'){
                	currentEntry.answersIdx.push(optionNo);
                }

                optionNo++;

            	nonContentMatch = true;
            }
        }

        if (currentEntry.type === 'dialogue') {
            if (line.trim().charAt(0) === '-') {

            	if(line.charAt(0) === "-") { //option
	                currentEntry.options[optionNo] = line.substring(2).trim();
	            }
	            else{
	            	currentEntry.respondToIdx[optionNo] = line.trim().substring(2).trim();
	            	optionNo++;
	            }

	            nonContentMatch = true;
            }
        }

        if(currentEntry.type === 'embed') {
            if (line.trim().charAt(0) === '-') {
      
                currentEntry.previewText = line.substring(2).trim();

                nonContentMatch = true;
            }
        }

        let justExitedLatexMode = false;
        let dollarCount = countInstances(line, "$");
        let doubleDollarCount = countInstances(line, "$$");
        if((dollarCount + doubleDollarCount) % 2 == 1){
        	if(inLatexMode){
        		justExitedLatexMode = true;
        	}
        	inLatexMode = !inLatexMode;
        }

        if (!nonContentMatch) {
            if(currentEntry.content != "" && inLatexMode == false && justExitedLatexMode == false){
            	currentEntry.content += "<br>";
            }
            currentEntry.content += line.trim();
        }

        
       

        //console.log(line);
        //console.log(inLatexMode);
    }

    pushCurrentEntry();

    var allInfo = {};
    allInfo.dialogueSystem = dialogueSystem;
    allInfo.compulsoryMessages = compulsoryMessages;
    allInfo.checkpoints = checkpoints;
    
    return allInfo;
}

function convertMarkdownToJS(mdPath, jsPath) {
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    const allInfo = parseMarkdown(mdContent);

    var jsContent = `const dialogueSystem = ${JSON.stringify(allInfo.dialogueSystem, null, 4)};`;
    jsContent += `\n\nconst compulsoryMessages = ${JSON.stringify(allInfo.compulsoryMessages, null, 4)};`
    jsContent += `\n\nconst checkpoints = ${JSON.stringify(allInfo.checkpoints, null, 4)};`
    fs.writeFileSync(jsPath, jsContent, 'utf-8');
    console.log(`Converted ${mdPath} -> ${jsPath}`);
}

var inputFileName = process.argv[2]
var outputFileName = inputFileName.replace(".md",".js")

var inputFile = path.join(__dirname, inputFileName);
var outputFile = path.join(__dirname, "..", "content", outputFileName);

convertMarkdownToJS(inputFile, outputFile);

function countInstances(string, word) {
   return string.split(word).length - 1;
}