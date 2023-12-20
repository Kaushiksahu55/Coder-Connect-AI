// // // 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
// // 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

// // const {Configuration , OpenAIApi} = require('openai');

// // const configuration = new Configuration({
// //     apiKey : "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",
// // });

// // const openai = new OpenAIApi(configuration);

// // export async function sendMessageToOpenAi(message){
// //     const response = await openai.createCompletion({
// //         model: 'text-davinci-003',
// //         prompt: message,
// //         temperature: 0.7,
// //         max_token: 256,
// //         top_p: 1,
// //         frequency_penalty: 0,
// //         presence_penalty: 0
// //     })

// //     return response.data.choices[0].text;
// // }


// import {Configuration , OpenAIApi} from 'openai'

// const configuration = new Configuration({
//     organization: 'org-IVfIuzUJiFfaEhzYVkFs3jNx',
//     apiKey: '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'
// });

// const openai = new OpenAIApi(configuration)

// export async function sendRequest(message) {
//     const response = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         max_token: 256,
//         temperature: 0.5,
//     })

//     console.log(response)
//     return response.data.choices[0].text;
// }






{/* <div className="chat">
            <img className="chatImage" src={userIcon} alt=""/>
            <p className="text">Hello My Self Coder Connect AI</p>
          </div>
          <div className="chat bot">
            <img className="chatImage" src={logoImage} alt=""/>
            <p className="text">Some Random Text</p>
          </div> */}