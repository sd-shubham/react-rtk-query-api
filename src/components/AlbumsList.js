import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpendablePanel from "./ExpendablePanel";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();
  console.log(data, error, isLoading);

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  let content;
  if (isLoading) content = <Skeleton times={6} className="h-10 w-full" />;
  else if (error)
    content = (
      <div>
        <p>Something went wromg...</p>
      </div>
    );
  else
    content = data.map((album) => {
      return <AlbumListItem album={album} key={album.id}/>
    });

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Album for {user.name}</h1>
        <Button loading={result.isLoading} primary onClick={handleAddAlbum}>
          +Add Album
        </Button>
      </div>
      {content}
    </div>
  );
}
export default AlbumsList;
