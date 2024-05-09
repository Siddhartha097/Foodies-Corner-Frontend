import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant={"ghost"}
          className="hover:text-rose-500 hover:bg-white font-bold"
          onClick={async () => await loginWithRedirect()}
        >
          Log in
        </Button>
      )}
    </div>
  );
};

export default Navbar;
