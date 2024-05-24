/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import db from '../../firebase'
// import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
// import storage from '../../firebase';

// // eslint-disable-next-line react/prop-types
// const FileUpload = ({ onUpload }) => {

//   const [selectedFile, setSelectedFile] = useState(null);

//   const vhToPixels = window.innerHeight * 2;

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

// const handleUpload = () => {
//   if (selectedFile) {
//     onUpload(selectedFile);
//     setSelectedFile(null);
//     // Reset the file input value to clear the selected file
//     const fileInput = document.querySelector('input[type="file"]');
//     if (fileInput) {
//       fileInput.value = '';
//     }
//     const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '[]');

//     // Append the new file's metadata to the existing uploaded files
//     uploadedFiles.push({ name: selectedFile.name });

//     // Update localStorage with the new uploaded files array
//     localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));

//     window.scrollTo({
//       top: window.scrollY + vhToPixels,
//       behavior: 'smooth', // You can use 'auto' for instant scrolling
//     });
//   }

// };

// const onFileUpload = () => {
//   if (!file) return;
//   setIsLoading(true)
// }

// const handleAddNewFile = async () => {

//   const firstName = 'Dev'
//   const lastName = 'Khu'
//   const fileName = JSON.stringify(selectedFile)

//   const collectionRef = collection(db, 'Testing')
//   const payload = { fileName };
//   await addDoc(collectionRef, payload)
// }

//   return (
//     <div className='mt-[75vh] flex items-center justify-center flex-col'>
//       <input type="file" onChange={handleFileChange} className='border border-black-100 rounded-md w-96 mr-4'/>
//       <button onClick={handleAddNewFile} className='bg-blue-900 w-[200px] h-[80px] text-[30px] rounded-md text-white mt-20'>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;

import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { storage } from '../../firebase';
// import Details from './Details';



const FileUpload = () => {


    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState();
    const [file, setFile] = useState();
    const [url, setUrl] = useState();


    const onFileUpload = () => {
        if (!file) return;
        setIsLoading(true);
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        }, (err) => {
            console.log(err);
            setIsLoading(false);
        },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setUrl(url);
                        setIsLoading(false);
                    })
            }
        )
    }

    const onFileChange = e => {
        setFile(e.target.files[0]);
        e.preventDefault();
    }


    return (
      <div className='mt-[75vh] flex items-center justify-center flex-row'>
            <input type="file" className='border border-black-100 rounded-md w-96 mr-4' onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button>
            {isLoading && <p className='ml-6'>File upload <b>{progress}%</b></p>}
            {/* {url && <p>Firebase storage URL: <a href={url} target="_blank" rel="noreferrer">{url}</a></p>} */}
      </div>

    )
}

export default FileUpload
