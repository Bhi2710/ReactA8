import React, { useState } from 'react';
import icon from '../assetes/copy.png';

const PassGenerator = () => {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState("8");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  
  const numbers = '0123456789';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const specialCharacters = "!+%&/()=?#{[]}@*$";


  const handleGeneratePassword = () => {
    let charList = ""

    if(includeUppercase){
      charList = charList + upperCaseLetters;
    }

    if(includeLowercase){
      charList = charList + lowerCaseLetters;
    }

    if(includeNumbers){
      charList = charList + numbers;
    }

    if(includeSymbols){
      charList = charList + specialCharacters;
    }

    setPassword(createPassword(charList))
  }

  const createPassword = (charList) =>{
    let password = ""

    const charListLength = charList.length;

    for(let i=0; i<passwordLength; i++){
      const charIndex = Math.round(Math.random() * charListLength);
      password = password + charList.charAt(charIndex)
    }
    return password
  }

  const copyText = () => {
    const newText = document.createElement('textarea')
    newText.innerText = password
    document.body.appendChild(newText)
    newText.select()
    document.execCommand('copy')
    newText.remove()
  }

  const copyPassword = (e) => {
    copyText()
  }


  return (
    <div className="main_container">
      <div className="main_item">
        <div className="heading">
          <h1>Password Generator</h1>
        </div>
        <div className="input_item">
          <div className='main_input'>
            <input type="text" value={password} disabled />
          </div>
          <div className='main_image'>
            <img src={icon} alt="icon" onClick={copyPassword} />
          </div>
        </div>

        <div className='select_div'>
          <div className='select_text'>
            <span>Select Password length</span>
          </div>
          <div className='select_element'>
            <select onChange={(e)=>setPasswordLength(e.target.value)}>
              <option defaultValue="8">8</option>
              <option defaultValue="9">9</option>
              <option defaultValue="10">10</option>
              <option defaultValue="11">11</option>
              <option defaultValue="12">12</option>
              <option defaultValue="13">13</option>
              <option defaultValue="14">14</option>
              <option defaultValue="15">15</option>
              <option defaultValue="16">16</option>
              <option defaultValue="17">17</option>
              <option defaultValue="18">18</option>
              <option defaultValue="19">19</option>
              <option defaultValue="20">20</option>
            </select>
          </div>
        </div>

        <div className='checkbox_item'>
          <div>
            <input type='checkbox' checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)}/>
            <label>Include uppercase letters</label>
          </div>
          <div>
            <input type='checkbox' checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)}/>
            <label>Include lowercase letters</label>
          </div>
          <div>
            <input type='checkbox' checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/>
            <label>Include numbers</label>
          </div>
          <div>
            <input type='checkbox' checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
            <label>Include symbols</label>
          </div>
        </div>

        <div className='submit_button'>
          <button onClick={handleGeneratePassword}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default PassGenerator;