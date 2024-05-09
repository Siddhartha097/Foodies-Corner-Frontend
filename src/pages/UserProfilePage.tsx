import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  const {currUser, isLoading: isGetLoading} = useGetMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>
  }

  if(!currUser) {
    return <span>Unable to load te User Profile</span>
  }

  return <UserProfileForm currUser={currUser} onSave={updateUser} isLoading={isUpdateLoading} />;
};

export default UserProfilePage;
