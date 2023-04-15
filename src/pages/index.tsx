import { useState } from "react";

function Home() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const TABS = [
    "top scorers",
    "incoming friend requests",
    "add friend"
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
