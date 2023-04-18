import { useState } from "react";
import styles from "@/styles/index.module.css";

function Home() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const TABS = [
    "top scorers",
    "incoming friend requests",
    "add friend"
  ];

  return (
    <div style={{textAlign: "center"}}>
      <div className={styles.buttonContainer}>
        {TABS.map((tab: string, i: number) => {
          return (
            <button
              key={i}
              onClick={()=>setCurrentTab(i)}
              className={styles.tabButton}
              style={{ color: currentTab === i ? "#a6da95" : "inherit"}}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div>
        {currentTab === 0 ? (
          <p>top scorers: top 30sec: ur mom</p>
        ): currentTab === 1 ? (
          <div>
            <p>incoming friend requests whatever.map</p>
            <p>also outgoing friend reqs</p>
          </div>
        ) : (
          <p>add friend, there should be a search box here</p>
        )}
      </div>
    </div>
  );
}

export default Home;
