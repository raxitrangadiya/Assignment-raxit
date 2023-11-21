import React, { useState } from 'react';

const App = () => {
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  return (
    <div>
      <h1>assessment</h1>

      <form>
        <label>
          Are you a Citizen?
          <input
            type="checkbox"
            checked={isCitizen}
            onChange={() => setIsCitizen(!isCitizen)}
          />
        </label>
        <br />

        <label>
          Are you over 21?
          <input
            type="checkbox"
            checked={isOver21}
            onChange={() => setIsOver21(!isOver21)}
          />
        </label>
      </form>

      <h2>Are you a Citizen: {isCitizen ? 'Yes' : 'No'}</h2>
      <h2>Are you over 21: {isOver21 ? 'Yes' : 'No'}</h2>
    </div>
  );
};

export default App;
