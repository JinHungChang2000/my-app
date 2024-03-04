'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

export default function Home() {
  // let tileArray = [];
  // for(let i=1; i<=100; i++){
  //   tileArray.push(false);
  // }

  const [tileArray, setTileArray] = useState(Array(100).fill(false));

  function handleTileClicked(tileIndex){
    const nextTileArray = tileArray.slice();
    nextTileArray[tileIndex] = !tileArray[tileIndex];
    setTileArray(nextTileArray);
  }

  return(
    <>
      {tileArray.map(function(isCustomColor, i){
        return <Tile key={"key" + (i+1)} isCustomColor={isCustomColor} tileNumber={(i+1)} handleTileClicked={() => handleTileClicked(i)}/>;
      })}
      {/* <p>Test</p> */}
      {/* <Tile key={"key" + (0+1)} isCustomColor={tileArray[0]} tileNumber={(0+1)} handleTileClicked={() => handleTileClicked(0)}/>; */}
      {/* <TestDIV tileNumber = "11" /> */}
    </>
  );
  // return (
  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <p>
  //         Get started by editing&nbsp;
  //         <code className={styles.code}>app/page.js</code>
  //       </p>
  //       <div>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{" "}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className={styles.vercelLogo}
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className={styles.center}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className={styles.grid}>
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Docs <span>-&gt;</span>
  //         </h2>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Learn <span>-&gt;</span>
  //         </h2>
  //         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Templates <span>-&gt;</span>
  //         </h2>
  //         <p>Explore starter templates for Next.js.</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Deploy <span>-&gt;</span>
  //         </h2>
  //         <p>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // );
}

export function Tile({isCustomColor, tileNumber,handleTileClicked}){
  return(
    <div onClick={handleTileClicked} className={isCustomColor ? styles.redTile : styles.blueTile}>
      <p>Tile {tileNumber}</p>
    </div>
  );
}
