import { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import hexagon from './assets/hexagon-logo.png';

const App = () => {

  const [uploadScrollDistanceVh] = useState(100); 

  const vhToPixelsUpload = window.innerHeight * (uploadScrollDistanceVh / 100);

  const [searchScrollDistanceVh] = useState(250); 

  const vhToPixelsSearch = window.innerHeight * (searchScrollDistanceVh / 100);

  const handleUploadScrollClick = () => {

    window.scrollTo({
      top: window.scrollY + vhToPixelsUpload,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  }

  const handleSearchScrollClick = () => {

    window.scrollTo({
      top: window.scrollY + vhToPixelsSearch,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  }

  return (
    <div style={{backgroundImage: `url(${hexagon})`}} className='background-div'>     
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-black-100 text-center text-[64px] mt-6'>Document Retrieval</h1>
      <div className='flex-row space-x-10 flex items-center justify-center mt-56'>
      <button
      onClick={handleUploadScrollClick}
      className='w-[400px] h-[175px] bg-blue-900 rounded-md'>
        <h1 className='text-[56px] text-white'>
          Upload
        </h1>
      </button>
      <button 
      onClick={handleSearchScrollClick}
      className='w-[400px] h-[175px] bg-blue-900 rounded-md'>
        <h1 className='text-[56px] text-white'>
          Search
        </h1>
      </button>
      </div>
      <div className='h-[250vh]'>
      <FileUpload />
      {/* <SearchBar onSearch={handleSearch} /> */}
      <FileList />
      </div>
    </div>
    </div>
  );
};

export default App;
