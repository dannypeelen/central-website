const path = require('path');
const fs = require('fs');
const os = require('os');
const { spawn} = require('child_process');

function createFP(flashcards, topic) {
    const tempDir = os.tmpdir()
    const tempFP = path.join(tempDir, 'flashcards_${Date.now()}.json');

    const data = {
        topic,
        flashcards
    }

    fs.writeFileSync(tempFilePath, JSON.stringify(data));
    return tempFilePath
}

function createAnkiDeck (flashcards, topic){
    return new Promise((resolve, reject) =>{
        const jsonPath = createFP(flashcards, topic);

        const pyScript = path.join(__dirname, 'anki_bridge.py');
        const pyProcess = spawn('python', [pyScript, jsonPath]);

        let outputData = '';
        let errData = '';

        pyProcess.on('data', (data) => {
            outputData += data.toString();
        })

        pyProcess.stderr.on('data', (data) => {
            errData += data.toString();
        })

        //clean temp file
        pyProcess.on('close', (code) => {
            try{
                fs.unlinkSync(jsonPath);
            }
            catch(err){
                console.warn('Failed to delete temp file:', err);
            }

            if (code != 0)  {
                console.error('Python process exited with code', code);
                console.error('Error output:', errorData);
                return reject(new Error(`Failed to create Anki deck: ${errorData}`));
            }

            try{
                const fp = outputData.trim();
                if(!fs.existsSync(fp)){
                    return reject(new Error('Anki deck file not found at expected path'));
                }
            }
            catch(err){
                reject(err);
            }
        });
    });
}

module.exports = { createAnkiDeck };