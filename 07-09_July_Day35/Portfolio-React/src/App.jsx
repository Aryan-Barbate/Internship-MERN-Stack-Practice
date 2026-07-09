import React, { useState, useEffect } from "react";
import "./style.css";

import ProfilePage from "./components/ProfilePage";
import PhilosophyPage from "./components/PhilosophyPage";
import ProjectsPage from "./components/ProjectsPage";
import ServicesPage from "./components/ServicesPage";
import SkillsPage from "./components/SkillsPage";
import LatestProjectPage from "./components/LatestProjectPage";
import ContactPage from "./components/ContactPage";
import TurnPage from "./components/TurnPage";

const PAGE_IDS = ["turn-1", "turn-2", "turn-3"];

let turned = { "turn-1": true, "turn-2": true, "turn-3": true };
let isScrolling = false;
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function App() {
  const [turnedState, setTurnedState] = useState(turned);
  const [coverTurned, setCoverTurned] = useState(false);
  const [z, setZ] = useState({});
  const [mobileIndex, setMobileIndex] = useState(0);

  const idxOf = (id) => PAGE_IDS.indexOf(id);

  const applyTurn = (id, turnOn, zValue) => {
    turned[id] = turnOn;
    setTurnedState({ ...turned });
    setTimeout(() => {
      setZ((prev) => ({ ...prev, [id]: zValue }));
    }, 500);
  };

  // opening animation
  useEffect(() => {
    const t1 = setTimeout(() => setCoverTurned(true), 2100);
    const t2 = setTimeout(() => setZ((p) => ({ ...p, coverRight: -1 })), 2800);
    const t3 = setTimeout(() => setZ((p) => ({ ...p, pageLeft: 20 })), 3200);

    const loadRemove = ["turn-3", "turn-1", "turn-2"];
    const loadZ = { "turn-2": 10, "turn-3": 11, "turn-1": 12 };
    const loadTimers = loadRemove.map((id, i) =>
      setTimeout(() => {
        applyTurn(id, false, loadZ[id]);
      }, (i + 1) * 200 + 2100)
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      loadTimers.forEach(clearTimeout);
    };
  }, []);

  const handlePageTurn = (pageId) => {
    if (window.innerWidth <= 768) return;
    const turnOn = !turned[pageId];
    applyTurn(
      pageId,
      turnOn,
      turnOn ? 20 + idxOf(pageId) : 20 - idxOf(pageId)
    );
  };

  const handleContactMe = () => {
    if (window.innerWidth <= 768) {
      setMobileIndex(6);
      return;
    }
    PAGE_IDS.forEach((id, index) => {
      setTimeout(() => applyTurn(id, true, 20 + index), (index + 1) * 200 + 100);
    });
  };

  const handleBackProfile = () => {
    if (window.innerWidth <= 768) {
      setMobileIndex(0);
      return;
    }
    const order = ["turn-3", "turn-1", "turn-2"];
    const zz = { "turn-2": 10, "turn-3": 11, "turn-1": 12 };
    order.forEach((id, i) => {
      setTimeout(() => applyTurn(id, false, zz[id]), (i + 1) * 200 + 100);
    });
  };

  const handleWheel = (e) => {
    if (window.innerWidth <= 768) return;
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
      const id = PAGE_IDS.find((p) => !turned[p]);
      if (id) applyTurn(id, true, 20 + idxOf(id));
    } else if (e.deltaY < 0) {
      let target = null;
      for (let i = PAGE_IDS.length - 1; i >= 0; i--) {
        if (turned[PAGE_IDS[i]]) {
          target = PAGE_IDS[i];
          break;
        }
      }
      if (target) applyTurn(target, false, 20 - idxOf(target));
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  };

  const handleTouchStart = (e) => {
    if (window.innerWidth > 768) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e) => {
    if (window.innerWidth > 768) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    if (
      Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY) &&
      Math.abs(touchStartX - touchEndX) > 50
    ) {
      if (touchStartX - touchEndX > 50) {
        setMobileIndex((i) => Math.min(i + 1, PAGE_IDS.length + 3));
      } else if (touchEndX - touchStartX > 50) {
        setMobileIndex((i) => Math.max(i - 1, 0));
      }
    }
  };

  const mb = (i) => {
    let c = "mobile-section";
    if (i === mobileIndex) c += " mobile-active";
    else if (i < mobileIndex) c += " mobile-prev-anim";
    return c;
  };

  return (
    <div
      className="wrapper"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="cover cover-left"></div>
      <div
        className={`cover cover-right ${coverTurned ? "turn" : ""}`}
        style={z.coverRight !== undefined ? { zIndex: z.coverRight } : undefined}
      ></div>

      <div className="book">
        <div
          className="book-page page-left"
          style={z.pageLeft !== undefined ? { zIndex: z.pageLeft } : undefined}
        >
          <ProfilePage className={mb(0)} onContactMe={handleContactMe} />
        </div>

        <TurnPage
          id="turn-1"
          turned={turnedState["turn-1"]}
          z={z["turn-1"]}
          front={<PhilosophyPage className={mb(1)} onTurn={() => handlePageTurn("turn-1")} />}
          back={<ProjectsPage className={mb(2)} onTurn={() => handlePageTurn("turn-1")} />}
        />

        <TurnPage
          id="turn-2"
          turned={turnedState["turn-2"]}
          z={z["turn-2"]}
          front={<ServicesPage className={mb(3)} onTurn={() => handlePageTurn("turn-2")} />}
          back={<SkillsPage className={mb(4)} onTurn={() => handlePageTurn("turn-2")} />}
        />

        <TurnPage
          id="turn-3"
          turned={turnedState["turn-3"]}
          z={z["turn-3"]}
          front={<LatestProjectPage className={mb(5)} onTurn={() => handlePageTurn("turn-3")} />}
          back={<ContactPage className={mb(6)} onTurn={() => handlePageTurn("turn-3")} onBackProfile={handleBackProfile} />}
        />
      </div>

      <div className="mobile-nav">
        <button onClick={() => setMobileIndex((i) => Math.max(i - 1, 0))}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button onClick={() => setMobileIndex((i) => Math.min(i + 1, PAGE_IDS.length + 3))}>
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
