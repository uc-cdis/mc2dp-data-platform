import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Custom403Page: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Not Authorized</title>
        <meta
          property="og:title"
          content="Gen3 403"
          key="gen3-not-authorized"
        />
      </Head>
      <div className="flex flex-col justify-center items-center h-full p-8 gap-2">
        <h1 className="text-2xl">Not Authorized</h1>
        <span>Your account is not authorized to access this website. If you have any questions about access or the registration process, please contact <Link href="mailto:gen3@datacommons.io" className="text-primary underline">gen3@datacommons.io</Link>.</span>
        <Link href="/" className="text-primary underline">
          Click here to go to the Portal&apos;s home page.
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Custom403Page;
