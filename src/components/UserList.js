import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, deleteUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

function UserList() {
  const { /*isLoading, data, error*/ data } = useSelector(
    (state) => state.users
  );
  const [doFetchUsers, isLoading, loadingUserError] = useThunk(fetchUsers);
  const [doAddUser, isUserAdding, addUserError] = useThunk(addUser);
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  };
  let content;
  if (isLoading) content = <Skeleton times={6} className="h-10 w-full" />;
  else if (loadingUserError) {
    content = <h1>something went wrong</h1>;
  } else {
    content = data.map((user,index) => <div key={user.id}> <UsersListItem user={user} index={index} /> </div>);
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isUserAdding} onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UserList;
