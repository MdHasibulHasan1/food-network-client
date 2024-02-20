import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { signIn, auth, user } = useContext(AuthContext);
  console.log(user?.email);

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const updateUserData = (e) => {
    if (!email || !name || !photoURL) {
      return toast.success("Write these input fields to update your profile");
    }
    updateProfile(auth.currentUser, {
      displayName: name,
      email: email,
      photoURL: photoURL,
    })
      .then(() => {})
      .catch((err) => {});
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <div className="mt-20 text-center mx-auto text-lg relative sm:static">
            <img
              className="w-20 mx-auto rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <h3>{user?.displayName}</h3>
            <h3>{user?.email}</h3>
            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn mt-2">
              Update Your Profile
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal absolute top-0">
              <div className="modal-box w-11/12 md:w-6/12 max-w-5xl relative">
                <h2 className=" text-3xl font-medium mb-4">
                  Update Your Profile
                </h2>
                <form>
                  <div className="mb-3  text-lg">
                    <label
                      htmlFor="name"
                      className=" font-extrabold block text-left text-gray-700 mb-2"
                    >
                      Name:
                    </label>
                    <input
                      onBlur={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-3 border rounded-md shadow-sm focus:outline-none focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                    />
                  </div>
                  <div className="mb-3  text-lg">
                    <label
                      htmlFor="email"
                      className="font-extrabold block text-left text-gray-700  mb-2"
                    >
                      Email:
                    </label>
                    <input
                      onBlur={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-3 border rounded-md shadow-sm focus:outline-none focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                    />
                  </div>

                  <div className="mb-3  text-lg">
                    <label
                      htmlFor="photo-url"
                      className="block font-extrabold text-left text-gray-700  mb-2"
                    >
                      Photo URL:
                    </label>
                    <input
                      onBlur={(e) => setPhotoURL(e.target.value)}
                      type="url"
                      id="photo-url"
                      name="photoUrl"
                      required
                      className="w-full px-4 border rounded-md shadow-sm focus:outline-none focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                    />
                  </div>
                  <button
                    onClick={() => updateUserData()}
                    type="submit"
                    className="bg-yellow-500 block  w-full text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                  >
                    Update Profile
                  </button>
                </form>
                <div className="modal-action absolute -top-5 z-50 -right-0">
                  <label htmlFor="my-modal-5" className="btn rounded-full">
                    X
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
