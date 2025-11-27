import { useMemo } from "react";
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
  const missionList = useMemo(() => {
    return Object.values(missions);
  }, []);

  return (
    <main>
      <ul>
        {missionList.map(({ missionName, displayName, imageCount }) => {
          return (
            <li key={missionName}>
              <section>
                <h3>{displayName}</h3>
                <ul>
                  {Array.from({ length: imageCount }, (_, i) => {
                    const url = `${BASE_URL}images/${missionName}.${
                      i + 1
                    }.webp`;
                    return (
                      <img
                        key={url}
                        src={url}
                        alt={`${displayName} map screenshot #${i + 1}`}
                        loading="lazy"
                      />
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
