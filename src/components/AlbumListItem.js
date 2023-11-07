import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpendablePanel from "./ExpendablePanel";
import { GoTrash } from "react-icons/go";
import PhotosList from "./PhotosList";

function AlbumListItem({ album }) {
const [removeAlbum,result] = useRemoveAlbumMutation();

const handleRemoveAlbum = () => {
    removeAlbum(album);
}
  const header = (
    <div className="flex p-2">
      <Button loading={result.isLoading} onClick={handleRemoveAlbum}>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );
  const renderAlbumItem = (
    <ExpendablePanel header={header} key={album.id}>
     <PhotosList album={album} />
    </ExpendablePanel>
  );
  return <>{renderAlbumItem}</>;
}
export default AlbumListItem;
