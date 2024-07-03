import ListNowPlaying from "@app/now-playing/listNowPlaying";
import ListPopular from "@app/popular/listPopuler";
import ListTopRated from "@app/top-rated/listTopRated";
import Container from "@components/organisms/Container";
import Image from "next/image";

export default function ListGallery() {
  return 
  <div>
    <ListNowPlaying/>
    <ListPopular/>
    <ListTopRated/>
  </div>
}
