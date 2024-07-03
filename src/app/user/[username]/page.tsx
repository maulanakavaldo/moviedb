import satellite from "@services/satellite";
import Image from "next/image";

interface Params {
  params: { username: string };
}

interface Response {
  [key: string]: string | number | boolean | null | undefined;
  avatar_url: string;
}
async function getPerson(username: string) {
  try {
    const response = await satellite.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: "Bearer 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",
        },
      }
    );
    console.log("RESPONSE SUCCESS", response);
    return response.data;
  } catch (error) {
    console.log("RESPONSE ERROR", error);
    throw error;
  }
}

export default async function UserDetails({ params: { username } }: Params) {
  try {
    const dataPerson: Response = await getPerson(username);
    return (
      <div className="flex flex-row min-h-screen px-3 pt-3">
        <div className="w-[200px] h-[200px] mr-4">
          <Image
            className="rounded-lg"
            src={dataPerson?.avatar_url}
            width={200}
            height={100}
            alt={"avatar_" + dataPerson?.id}
          ></Image>
        </div>
        <div className="flex flex-col">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-bold xl">ID</td>
                <td>:</td>
                <td>{dataPerson?.id}</td>
              </tr>
              <tr>
                <td className="font-bold">Name</td>
                <td>:</td>
                <td>{dataPerson?.name}</td>
              </tr>
              <tr>
                <td className="font-bold">Bio</td>
                <td>:</td>
                <td>{dataPerson?.bio}</td>
              </tr>
              <tr>
                <td className="font-bold">Email</td>
                <td>:</td>
                <td>{dataPerson?.email}</td>
              </tr>
              <tr>
                <td className="font-bold">Company</td>
                <td>:</td>
                <td className="pr-4">{dataPerson?.company}</td>
              </tr>
              <tr>
                <td className="font-bold">Location</td>
                <td>:</td>
                <td>{dataPerson?.location}</td>
              </tr>
              <tr>
                <td className="font-bold">Blog</td>
                <td>:</td>
                <td>{dataPerson?.blog}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
