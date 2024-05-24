import { useState, useEffect } from 'react';
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage"
// import { DeleteOutlined } from '@ant-design/icons';

const FileList = () => {

const [urls, setUrls] = useState([]);

const fetchImages = async () => {
  const storageRef = await ref(storage, "files");
  const result = await listAll(storageRef);

  const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

  return Promise.all(urlPromises);
};

const loadImages = async () => {
  const _urls = await fetchImages();
  setUrls(_urls);
};


useEffect(() => {
  loadImages();
}, []);


const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(urls);

  const filterItems = () => {
    const filtered = urls.filter((item) => {
      if (item) {
        return item.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false; // Handle items without a "name" property.
    });
    setFilteredItems(filtered);
  };

  useEffect(() => {
    filterItems();
  }, [searchQuery, urls]);


  return (
    <div className='flex flex-col items-center mt-[90vh]'>
    <input
        className='border border-black-100 rounded-md w-96 mr-4 p-2'
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    <div className='mt-10'>
      {/* <h2 className='text-black-100 text-2xl underline text-center'>Uploaded Files</h2>
      <ul className='flex flex-row space-x-12 mt-12 items-center justify-center px-10 list-container-4'>
        {files.map((file, index) => (
          <li key={index}>
             <a href={file.name} target="_blank" rel="noreferrer" className="text-blue-900 underline">
              {file.name}
            </a>
            <button onClick={() => onRemove(file.name)}>
              <DeleteOutlined className='ml-4'/>
            </button>
          </li>
        ))}
      </ul> */}
      <h2 className='text-black-100 text-2xl underline text-center mb-10'>Uploaded Files</h2>
      {filteredItems.length > 0 ? (
        <ul className='max-w-5xl flex flex-col'>
          {filteredItems.map((url, index) => (
            <li key={index}>
              <a className='text-blue-900 underline' target="_blank" rel="noreferrer" href={url}>
                {url}
              </a>
            </li>
          ))}
        </ul>
      ): null
      }
    </div>
    </div>
  );
};

export default FileList;

// import { useEffect, useState } from 'react';
// import db from '../../firebase.js'
// import { logEvent, getAnalytics } from "firebase/analytics";
// import { onSnapshot, collection } from 'firebase/firestore';


// const Firebase = () => {

// 	const analytics = getAnalytics();

// 	logEvent(analytics, 'screen_view', {
// 		data: 'Home'
// 	})

// 	const [ firebaseDataList, setFirebaseDataList ] = useState([{name: 'Loading...', id: 'initial'}]);

// 	useEffect(() => onSnapshot(collection(db, 'Testing'), (snapshot) =>
// 			setFirebaseDataList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
// 		), []);

// 	console.log(firebaseDataList)

// 	return (
// 		<div>
// 			<ul>
// 				{firebaseDataList?.map((data) => (
// 					<li key={data.id}>
// 						<a href=''>
// 							{data?.firstName}
// 						</a>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }

// export default Firebase;

