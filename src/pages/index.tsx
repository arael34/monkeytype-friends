import { useState } from "react";

function Home() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const TABS = [
    "Top Scorers",
    "Incoming Friend Requests",
    "Add Friend"
  ];

  return (
    <div>
      <div>
        {TABS.map((tab: string, i: number) => {
          return (
            <button
              key={i}
              onClick={()=>setCurrentTab(i)}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div>
        {currentTab === 0 ? (
          <p>Top Scorers: Top 30sec: ur mom</p>
        ): currentTab === 1 ? (
          <p>Incoming Friend Requests whatever.map</p>
        ) : (
          <p>add friend, there should be a search box here</p>
        )}
        
      </div>
    </div>
  );
}

export default Home;
