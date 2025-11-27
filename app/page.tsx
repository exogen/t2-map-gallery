"use client";

import { useMemo, useState, useDeferredValue } from "react";
import { matchSorter } from "match-sorter";
import untypedMissionsJson from "./missions.json";

const BASE_URL = "/t2-map-gallery/";

const missions = untypedMissionsJson as Record<
  string,
  {
    missionName: string;
    displayName: string;
    imageCount: number;
  }
>;

export default function GalleryPage() {
  const [filter, setFilter] = useState("");
  const deferredFilter = useDeferredValue(filter);

  const allMissions = useMemo(() => {
    return Object.values(missions);
  }, []);

  const missionList = useMemo(() => {
    if (!deferredFilter.trim()) {
      return allMissions;
    }
    return matchSorter(allMissions, deferredFilter, {
      keys: ["missionName", "displayName"],
    });
  }, [allMissions, deferredFilter]);

  const isStale = filter !== deferredFilter;

  return (
    <main>
      <header>
        <form action="." method="GET" onSubmit={(e) => e.preventDefault()}>
          <input
            name="filter"
            type="text"
            placeholder="Filter"
            className="TextInput"
            autoFocus
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ opacity: isStale ? 0.7 : 1 }}
          />
        </form>
      </header>
      <ul className="MissionList">
        {missionList.map(({ missionName, displayName, imageCount }) => {
          return (
            <li key={missionName} className="Mission">
              <section>
                <h3 className="MapName">{displayName}</h3>
                <ul className="ImageList">
                  {Array.from({ length: imageCount }, (_, i) => {
                    const url = `${BASE_URL}images/${missionName}.${
                      i + 1
                    }.webp`;
                    return (
                      <li key={url} className="ImageItem">
                        <img
                          className="PreviewImage"
                          src={url}
                          alt={`${displayName} map screenshot #${i + 1}`}
                          loading="lazy"
                        />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
