import { GoTrash } from 'react-icons/go';
import Button from "./Button";
import ExpendablePanel from "./ExpendablePanel";
import { useRemovePhotoMutation } from '../store';

function PhotosListItem({ photo }) {

 const [removePhoto,result] =   useRemovePhotoMutation();
//   const header = (
//     <div className="flex p-2">
//       <Button>
//         <GoTrashcan />
//       </Button>
//     </div>
//   );

const handleRemovePhoto = () => {
    removePhoto(photo)
}
  const renderAlbumItem = (
    // <ExpendablePanel header={header}>
    //   <h1>Photos...!!!</h1>
    // </ExpendablePanel>
    // <div className="relative m-2">
    //     <img src={photo.url} alt="rendom pic" className="h-20 w-20" />
    // </div>
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
    <img className="h-20 w-20" src={photo.url} alt="random pic" />
    <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
      <GoTrash className="text-3xl" />
    </div>
  </div>
  );
  return <>{renderAlbumItem}</>;
}
export default PhotosListItem;
