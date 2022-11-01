import { FormEvent, useState } from "react";
import { createSSGHelpers } from "@trpc/react/ssg";
import type { NextPage } from "next";
import dynamic from 'next/dynamic'
import superjson from "superjson";

import { appRouter, createContext } from "server/router";
import { Footer } from "widgets/footer";

const Header = dynamic<{}>(() =>
  import('widgets/header').then((mod) => mod.Header)
);

export async function getServerSideProps() {
  const ssg = await createSSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
}

const SignUp: NextPage = () => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (repPassword !== password) {
      setError('Passwords are not the same');
    }
  };

  return (
    <>
      <Header />
      <div className="fixed w-full top-44 sm:top-[75px] bottom-20 left-0 flex flex-nowrap justify-center">
        <div className="bg-[url(https://source.unsplash.com/random)] bg-no-repeat w-1/2 hidden sm:block"></div>
        <div className="flex flex-col flex-nowrap items-center w-full sm:w-1/2 justify-abroad">
          <div className="mt-[10vh] sm:mt-[20vh] w-full items-center">
            <h2 className="text-2xl text-mainColor font-bold mb-4 sm:mb-0 text-center">
              Sign Up
            </h2>
            <form className="mt-8 mb-3 text-xl text-blue-500 flex flex-col justify-center items-center w-full gap-y-4" onSubmit={onSubmit}>
              <input type="text" className="border-2 rounded py-1 px-2 placeholder:text-base placeholder:italic placeholder:text-slate-400 " placeholder="Name" name="userName" value={name} onChange={e => setName(e.target.value)} required />
              <input type="email" className="border-2 rounded py-1 px-2 placeholder:text-base placeholder:italic placeholder:text-slate-400 " placeholder="Email" name="userMail" value={mail} onChange={e => setMail(e.target.value)} required />
              <input type="password" className="border-2 rounded py-1 px-2 placeholder:text-base placeholder:italic placeholder:text-slate-400 " placeholder="Password" name="userPassword" value={password} onChange={e => setPassword(e.target.value)} required />
              <input type="password" className="border-2 rounded py-1 px-2 placeholder:text-base placeholder:italic placeholder:text-slate-400" placeholder="Repeat password" name="userRepPassword" value={repPassword} onChange={e => setRepPassword(e.target.value)} required />
              <button className="mt-2 px-10 py-1 text-xl text-rose-600 flex justify-center items-center border-2 rounded border-rose-600" type="submit">Submit!</button>
            </form>
            {error && <p className="mt-3 text-xl text-rose-600 text-center">{error}</p>}
          </div>
          <div className="flex flex-1 flex-col justify-end">
            <h2 className="flex text-xl justify-end text-mainColor font-bold mb-4">
              Copyright © Movie-App {new Date().getFullYear()}
            </h2>
          </div>
        </div>
      </div>
      <Footer position="fixed" />
    </>
  );
};

export default SignUp;
