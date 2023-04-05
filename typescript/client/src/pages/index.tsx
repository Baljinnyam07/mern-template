import Head from 'next/head'
import { useState } from 'react'


export default function Home(): JSX.Element {
  const [counter, setCounter] =useState<number>(0);
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={(): void =>{setCounter(counter+1)}}>
        {counter}
      </button>
    </>
  )
}
