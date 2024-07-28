import { React, useRef, useEffect, useState } from "react";
import { Editor } from '@monaco-editor/react';
import axios from "axios";



function CodeEditor() {
  const monacoRef = useRef(null);
  const [executing, setExecution] = useState(false);
  const [intervalFunction, setIF] = useState(null);
  const [defaultCode, setDefaultCode] = useState(`# fill out the function as per the question requires
def isPalindrome(num):
  pass
`);
  const [language, setLanguage] = useState('python');
  const [submissionToken, setSubmissionToken] = useState(null);

  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = editor;
  }

  function getSubmissionStatus(token_id) {

  }

  function handleRun() {
    // console.log(monacoRef.current.getValue());
    axios.post('http://localhost:5000/run', { srcCode: monacoRef.current.getValue(), language: language })
      .then(function (response) {
        console.log(response.data.success);
        if (response.data.success) {
          setExecution(true);
          setSubmissionToken(response.data.token);
        };
      })
      .catch(function (error) {
        // console.log(`Server error ${error}`)
        // TODO use react toast
        // toast.error("Server error! Contact developer")

      })
  }

  function handleSubmit() {
    console.log("submit code");
  }

  useEffect(() => {

    if (executing) {
      const intervalId = setInterval(() => {
        console.log('this will run every 500 milliseconds')
      }, 500);
      setIF(intervalId);

      //TODO continously check if execution has ended 
      //if it has set executing to false and show results
    }
    else {
      if (intervalFunction != null) {
        clearInterval(intervalFunction);
        setIF(null);
      }
    }


    return () => {

    };

  }, [executing]);

  return (
    <div>

      {/*ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
  theme="dark" */}
      <div >
        <Editor
          height="86vh"
          width="139.2vh"
          defaultLanguage={language}
          theme="vs-dark"
          defaultValue={defaultCode}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          
        />
      </div>

      <div className="self-center flex w-[370px] max-w-full items-start justify-between gap-5 mt-10 ml-20">
        <div className="w-[200px] bg-red border-2 rounded text-center ">
          <button onClick={handleRun} disabled={executing} className="h-[41px] flex-col flex-1 border-solid border-teal-400">Run solution</button>
        </div>
        <div className="w-[200px] bg-blue border-2 rounded text-center ">
          <button onClick={handleSubmit} disabled={executing} className="h-[41px] flex-col flex-1 border-solid border-teal-400">Submit solution</button>
        </div>
      </div>
      

      {executing ? <h1 className="text-white">Executing </h1> : <div></div>}
    </div>
    
  );
}

export default CodeEditor;
