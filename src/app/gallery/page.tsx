import ListNowPlaying from "@app/now-playing/listNowPlaying";
import ListPopular from "@app/popular/listPopuler";
import ListTopRated from "@app/top-rated/listTopRated";
import Upcoming from "@app/up-coming/page";

export const metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <div className="min-h-screen">
        <div>
    <ListNowPlaying/>
    <ListPopular/>
    <ListTopRated/>
    <Upcoming/>
  </div>
    </div>
  );
}
