import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../../../public/bhorosha.png'
import { AuthContext } from '../../context/AuthContext';
import { log } from 'firebase/firestore/lite/pipelines';

const Signin = () => {
  const { signInUser } = use(AuthContext)
  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Send data to server
    signInUser(email, password)
      .then(rasult => {
        console.log(rasult.user);
        const signInInfo = {
          email,
          lastSignInTime: rasult.user?.metadata?.lastSignInTime
        }
        fetch('http://localhost:3000/users', {
          method: "PATCH",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(signInInfo)
        })
          .then(res => res.json())
          .then(data => console.log("data after patch", data)
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
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignIn} method="POST" class="space-y-6">
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
            Not a member?
            <NavLink to="/signUp" class="font-semibold text-indigo-400 hover:text-indigo-300">Start with us</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;