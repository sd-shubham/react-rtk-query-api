import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";
import Button from "./Button";
import ExpendablePanel from "./ExpendablePanel";
import AlbumsList from "./AlbumsList";
function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(deleteUser);
  const handleClick = (id) => {
    doRemoveUser(id);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={() => handleClick(user.id)}>
        <GoTrash />
      </Button>
      {user.name}
    </>
  );
  return <ExpendablePanel header={header}>
    <AlbumsList user={user} />
  </ExpendablePanel>;
}

export default UsersListItem;
