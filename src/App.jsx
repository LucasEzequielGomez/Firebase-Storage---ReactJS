import { useState } from 'react';
import { uploadFile }  from './firebase/config';

function App() {

  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventdefault();
    try {
      const result = await uploadFile(file);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="" 
        id="" 
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Upload</button>
    </form>
  );
}

export default App;
