import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();
  console.log(album);
  const handleAddPhoto = () => {
    addPhoto(album);
  };
  let content;
  if (isFetching) content = <Skeleton times={6} className="h-10 w-full" />;
  else if (error)
    content = (
      <div>
        <p>Something went wromg...</p>
      </div>
    );
  else
    content = data.map((photo) => {
      return <PhotosListItem photo={photo} key={photo.id} />;
    });

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Photos For {album.title}</h1>
        <Button loading={result.isLoading} primary onClick={handleAddPhoto}>
          +Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
      {content}
      </div>
    </div>
  );
}

export default PhotosList;
