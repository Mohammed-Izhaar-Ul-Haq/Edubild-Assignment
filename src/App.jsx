import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  //use ref hook used to select any element on web page and lets it to manipulate

  const passwordRef = useRef(null);

  //use callback function because it will store the rerender function in cache

  //use state
  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      //if number is allowed hen add numbers 1234567890 to str end
      if (numberAllowed) string += "0123456789";

      //if characters is allowed hen add numbers 1234567890 to str end

      if (characterAllowed) string += "`~!@#$%^&*()-=_+{}[]:;/|";

      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * string.length + 1);
        pass += string.charAt(char);
      }
      setPassword(pass);
    },
    [length, numberAllowed, characterAllowed, setPassword]
  );

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
    setButtonText("Copied"); // Change the button text to "Copied"
    setTimeout(() => setButtonText("Copy"), 2000); // Reset it to "Copy" after 2 seconds
  }, [password]);

  //useEffect hook syncronized with changes
  useEffect(() => {
    passwordGenerator();
    setButtonText("Copy"); // Reset the button text to "Copy"
  }, [length, characterAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-700">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            id="copyBtn"
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            {buttonText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              className="cursor-pointer"
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="characterInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
