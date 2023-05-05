import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { signIn, auth, user } = useContext(AuthContext);

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  console.log(user);
  const updateUserData = () => {
    updateProfile(user, {
      displayName: name,
      email: email,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Update Successful!");
      })
      .catch((err) => {
        toast.success("Something wrong");
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-medium mb-4">Update Your Profile</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name:
              </label>
              <input
                onBlur={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email:
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photo-url"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL:
              </label>
              <input
                onBlur={(e) => setPhotoURL(e.target.value)}
                type="url"
                id="photo-url"
                name="photoUrl"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              onClick={() => updateUserData()}
              type="submit"
              className="bg-blue-500 block w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
