import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../../../public/bhorosha.png'
import { AuthContext } from '../../context/AuthContext';

const Signup = () => {
  const { creatUser } = use(AuthContext);
  // console.log(creatUser);

  const signUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(formData.entries());
    console.log(email, password, userProfile);



    // const email = formData.get('email');
    // const password = formData.get('password');
    // console.log(email, password, userProfile);




    creatUser(email, password)
      .then(rasult => {
        console.log(rasult.user);

       return fetch('http://localhost:3000/users', {
          method: "POST",
          headers: {
            "Content-type": 'application/json'
          },
          body: JSON.stringify(userProfile)
        })
          .then(res => res.json())
          .then(data => console.log("after send databatch", data)
          )

      })
      .catch(error => {
        console.log(error);

      })

  }

  return (
    <div className='bg-[#101828]'>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="Your Company" class="mx-auto h-10 w-auto" />
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign Up to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={signUp} method="POST" class="space-y-6">
            <div>
              <label for="name" class="block text-sm/6 font-medium text-gray-100">Name:</label>
              <div class="mt-2">
                <input id="name" type="text" name="name" required autocomplete="name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label for="address" class="block text-sm/6 font-medium text-gray-100">Address:</label>
              <div class="mt-2">
                <input id="address" type="text" name="address" required autocomplete="address" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label for="profile_picture" class="block text-sm/6 font-medium text-gray-100">Profile Picture:</label>
              <div class="mt-2">
                <input id="profile_picture" type="text" name="profile_picture" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm/6 font-medium text-gray-100">Email address</label>
              <div class="mt-2">
                <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>


            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
              </div>
              <div class="mt-2">
                <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm/6 text-gray-400">
            are you a member?
            <NavLink to="/signIn" className="font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer">Login in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;