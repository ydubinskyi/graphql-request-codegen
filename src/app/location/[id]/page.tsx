import { rockAndMortyClient } from "@/clients/rickAndMortyClient";
import Image from "next/image";

const getLocationDetails = async (locationId: string) => {
  return rockAndMortyClient.LocationDetails({ locationId });
};

export default async function LocationDetails({
  params,
}: {
  params: { id: string };
}) {
  const { location } = await getLocationDetails(params.id);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-lg mb-4">{location?.name}</h1>

        <p className="text-sm">Dimension: {location?.dimension}</p>
      </div>

      <h2 className="text-lg mb-8">Characters:</h2>

      <ul className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0">
        {location?.residents.map((char) => (
          <li
            key={char?.id}
            className="block p-4 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Image
              className="mx-auto mb-2 rounded-full"
              width={100}
              height={100}
              src={char?.image as string}
              alt="Char image"
            />
            <p className="text-a">{char?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
