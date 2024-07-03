import ListNowPlaying from "./listNowPlaying";

export const metadata = {
  title: "Now Playing",
};

export default function NowPlaying() {
  return (
    <div className="min-h-screen">
      <ListNowPlaying/>
    </div>
  );
}
