import React, { useState } from 'react';

function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/";
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength);
    setGeneratedPassword(newPassword);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Strong Password Generator</h1>
      <div className="flex mb-4">
        <label htmlFor="passwordLength" className="mr-2">Password Length:</label>
        <input
          type="number"
          id="passwordLength"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          className="border border-gray-400 px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleGeneratePassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Password
        </button>
      </div>
      {generatedPassword && (
        <div className="bg-gray-100 p-4 rounded w-auto">
          <p className="mb-2">Your Generated Password:</p>
          <input
            type="text"
            value={generatedPassword}
            readOnly
            className="border border-gray-400 px-2 py-1 w-full"
          />
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
