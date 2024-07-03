import TestRedux from "./testRedux";
import { useSelector, useDispatch } from "react-redux";

export const metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <div className="min-h-screen px-3 pt-3">
      <h1 className="text-7xl">About Us</h1>
      {/* <TestRedux /> */}

      <p className="pt-8">
        Selamat datang di halaman resmi Bootcamp Techno Center Batch 8! Kami
        bangga mempersembahkan proyek unggulan kami yang menggabungkan keahlian
        dalam pengembangan web dengan teknologi terkini. Batch 8 ini terkenal
        dengan proyek inovatifnya yang menggunakan framework Next.js dan
        mengintegrasikannya dengan API MovieDB.
      </p>

      <p className="pt-8">
        Proyek ini mendorong para peserta bootcamp untuk mengasah keterampilan
        pengembangan front-end mereka melalui pembuatan aplikasi web dinamis
        yang memanfaatkan data film dari MovieDB API. Dengan Next.js sebagai
        dasar pengembangan, proyek ini tidak hanya menghadirkan antarmuka
        pengguna yang responsif dan menarik, tetapi juga memberikan pengalaman
        pengguna yang mulus dan cepat.
      </p>

      <p className="pt-8">
        Tim Batch 8 Techno Center telah berkolaborasi dengan penuh semangat,
        menghadirkan fitur-fitur canggih dan desain yang memukau. Melalui proyek
        ini, peserta bootcamp tidak hanya memperdalam pemahaman mereka tentang
        Next.js, tetapi juga menguasai konsep pengambilan data dari API
        eksternal untuk meningkatkan keahlian pengembangan back-end mereka.
      </p>

      <p className="pt-8">
        Teruslah mengikuti perjalanan kami di halaman ini untuk melihat hasil
        karya luar biasa dari Bootcamp Techno Center Batch 8. Kami percaya bahwa
        proyek Next.js dengan API MovieDB ini mencerminkan komitmen kami untuk
        memberdayakan peserta bootcamp menjadi pengembang web yang terampil dan
        siap bersaing di dunia industri yang terus berkembang. Terima kasih
        telah mendukung kami dalam perjalanan ini!
      </p>
    </div>
  );
}
