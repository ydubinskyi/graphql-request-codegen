import Link from "next/link";

import { rockAndMortyClient } from "@/clients/rickAndMortyClient";

const getLocations = async () => {
  return rockAndMortyClient.Locations();
};

export default async function Home() {
  const locations = await getLocations();
  return (
    <div>
      <h1 className="text-lg mb-5">Locations:</h1>

      <ul className="divide-y divide-gray-700">
        {locations.locations?.results?.map((location) => (
          <li key={location?.id} className="py-2">
            <Link href={`location/${location?.id}`}>
              <p>{location?.name}</p>
              <p className="text-sm text-gray-500">
                Dimension: {location?.dimension}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
