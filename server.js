const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 8000

app.use(cors())

const alphabet = {
    'A':{
        'exercise': '10 Jump Squats',
        
    },
    'B':{
        'exercise': '25 crunches',
        
    },
    'C':{
        'exercise': '15 push ups',
         
    },
    
    'D':{
        'exercise': '30 jumping jacks',
        
    },
    'E':{
        'exercise': '1 minute wall sit',
        
    },
    'F':{
        'exercise': '20 tricep dips',
         
    },

    'G':{
        'exercise': '20 forward lunges',
         
    },

    'H':{
        'exercise': '20 narrow squats',
         
    },
    'I':{
        'exercise': '20 sumo squats',
         
    },
    'J':{
        'exercise': '25 reverse lunges',
         
    },
    'K':{
        'exercise': '20 calf raises',
         
    },

    'L':{
        'exercise': '1 minute wall sit',
         
    },
    'N':{
        'exercise': '20 tricep dips',
         
    },
    'O':{
        'exercise': '25 push ups',
         
    },
    'P':{
        'exercise': '30 mountain climbers',
         
    },
    'Q':{
        'exercise': '1 minute plank',
         
    },
    'R':{
        'exercise': '40 russian twists',
         
    },
    'S':{
        'exercise': '20 lunges',
         
    },
    'T':{
        'exercise': '10 burpes',
         
    },
    'U':{
        'exercise': '50 ',
         
    },
    'V':{
        'exercise': '10 push ups',
         
    },
    'W':{
        'exercise': '20 tricep dips',
         
    },
    'X':{
        'exercise': '30 mountain climbers',
         
    },
    'Y':{
        'exercise': '50 russion twists',
         
    },
    'Z':{
        'exercise': '10 jump squats',
         
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

// app.get('/api/:alphabet', (request,response)=>{
//     const alphabetExercise = request.params.alphabetName.toLowerCase()
//     if(alphabet[alphabetName]){
//         response.json(alphabet[alphabetName])
//     }else{
//         response.json(alphabet['Letters only, no special characters'])
//     }
// })

app.get('/api/:name', (request, response) => {
    const name = (request.params.name.toLocaleUpperCase())
    let letters = name.split('');
    let exercises = []
    console.log(name);
    console.log(letters);
    
    for (let i = 0; i < letters.length; i++){
        letters[i]
        alphabet[letters[i]]
        exercises.push(alphabet(letters[i]))
        // letter = letters[i]
        // let exercise = alphabet[letter]
        // exercises.push(exercise)
        //exercises.push(alphabet[letters[i]])
    }
    console.log(exercises);
    
    response.json(exercises)
    
})

// app.post('/api/:alphabet/letter', (request, response)=>{
//     if(body.alphabet === letter){
//         return exercise
//     }
// })




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})