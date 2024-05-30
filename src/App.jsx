import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';

function App() {
  // const [name, setName] = useState('');
  // const [prompt, setPrompt] = useState('');
  // const [voiceOf, setVoiceOf] = useState('');
  // const [response, setResponse] = useState('');

  // const callAPI = async () => {
  //   try {
  //     const formData = { name, prompt, voice_of: voiceOf };
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //       redirect: 'follow',
  //     };

  //     const response = await fetch('https://elb818a5f9.execute-api.eu-north-1.amazonaws.com/dev', requestOptions);
  //     const result = await response.json();
  //     setResponse(result.body);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // return (
  //   <div className="App">
  //     <h1>WELCOME TO CelebGPT!</h1>
  //     <form>
  //       <label>Your Name:</label>
  //       <textarea value={name} onChange={(e) => setName(e.target.value)} rows="2" cols="30"></textarea>
  //       <label>Prompt:</label>
  //       <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows="4" cols="50"></textarea>
  //       <label>...in the style of:</label>
  //       <textarea value={voiceOf} onChange={(e) => setVoiceOf(e.target.value)} rows="2" cols="30"></textarea>
  //       <button type="button" onClick={callAPI}>SUBMIT</button>
  //     </form>
  //     <div id="response">{response}</div>
  //   </div>
  // );

  return (
    <div>
      <SignUp/>
    </div>
  );
};

export default App;
