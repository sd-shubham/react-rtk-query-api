import UserList from "./components/UserList";
import { LoginForm } from "./components/formHooks/LoginForm";

export function App() {
    return <div>
        <div className="container mx-auto">
            {/* <UserList /> */}
            <LoginForm />
        </div>
    </div>
}