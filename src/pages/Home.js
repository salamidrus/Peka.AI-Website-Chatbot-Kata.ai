import React, { useState } from "react";
import Wanita from "../assets/icons/wanita.png";
import Circle from "../assets/icons/circleee.png";
import "./Home.css";
import { CardGrid, Card } from "@kata-kit/card";
import { Chrono } from "react-chrono";
import Awan from "../assets/icons/awan.png";
import Oval from "../assets/icons/oval.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import Carousel2 from "nuka-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {
  const [tentangPeka, setTentangPeka] = useState(false);
  const [gejala, setGejala] = useState(false);
  const [diagnosa, setDiagnosa] = useState(false);
  const [tingkatan, setTingkatan] = useState(false);
  const [tipe, setTipe] = useState(false);
  const [mitos, setMitos] = useState(false);
  const [faqs, setFaqs] = useState(false);
  const [pencegahan, setPencegahan] = useState(false);
  const [cek, setCek] = useState(false);
  const items = [
    {
      title: "Stadium 0",
      cardTitle: "Stadium 0",
      cardDetailedText:
        "Kanker tidak berkembang lebih jauh dari tempat tumbuhnya di duktus atau lobulus, dan belum menyebar ke jaringan di sekitarnya. Kondisi ini disebut in situ.",
    },
    {
      title: "Stadium 1",
      cardTitle: "Stadium 1A",
      cardDetailedText:
        "Tumor berukuran hingga 20 mm dan belum menyebar ke kelenjar getah bening di ketiak.",
    },
    {
      title: "Stadium 1",
      cardTitle: "Stadium 1B",
      cardDetailedText:
        "Kanker sudah menyebar ke kelenjar getah bening di ketiak, dengan ukuran lebih besar dari 0,2 mm namun kurang dari 2 mm. Sedangkan pada payudara terdapat tumor dengan ukuran tidak lebih dari 20 mm atau bisa tidak nampak tumor.",
    },
    {
      title: "Stadium 2",
      cardTitle: "Stadium 2A",
      cardDetailedText:
        "Kanker sudah menyebar ke kelenjar getah bening di ketiak dengan ukuran 2 mm atau lebih, dengan tumor di payudara tidak lebih dari 20 mm atau tidak tampak tumor di payudara. Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm, tetapi belum menyebar ke kelenjar getah bening di ketiak.",
    },
    {
      title: "Stadium 2",
      cardTitle: "Stadium 2B",
      cardDetailedText:
        " Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di ketiak. Ukuran tumor lebih besar dari 50 mm, namun tidak menyebar ke kelenjar getah bening.",
    },
    {
      title: "Stadium 3",
      cardTitle: "Stadium 3A",
      cardDetailedText:
        "Kanker sudah menyebar ke 4 hingga 9 kelenjar getah bening di ketiak atau kelenjar getah bening di dalam payudara, dengan ukuran tumor di payudara hingga 50 mm. Bisa juga tidak ada tumor di payudara. Ukuran tumor lebih besar dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di ketiak.",
    },
    {
      title: "Stadium 3",
      cardTitle: "Stadium 3B",
      cardDetailedText: "Tumor sudah menyebar ke kulit dinding payudara.",
    },
    {
      title: "Stadium 3",
      cardTitle: "Stadium 3C",
      cardDetailedText:
        "Ukuran tumor bisa bervariasi, dan telah menyebar hingga ke 10 kelenjar getah bening atau lebih di ketiak, atau sudah menyebar ke kelenjar getah bening di dalam payudara dan leher.",
    },
    {
      title: "Stadium 4",
      cardTitle: "Stadium 4",
      cardDetailedText:
        "Pada stadium ini, ukuran tumor bisa bervariasi, dan telah menyebar jauh ke organ lain, seperti tulang, paru-paru, hati, atau otak.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#FFB6C1, #ff1493)",
        height: "1024px",
        display: "flex",
      }}
      className="font-lucida"
    >
      <div
        style={{
          position: "fixed",
          bottom: "-1%",
          left: "50%",
          transform: "translate(-50%,0%)",
        }}
        className={`wanita ${
          tentangPeka ||
          pencegahan ||
          gejala ||
          diagnosa ||
          tingkatan ||
          tipe ||
          mitos ||
          faqs
            ? "wanita-fade"
            : ""
        }`}
      >
        <img src={Wanita} width="700px" />
      </div>
      {/* 1 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${tentangPeka ? "icon-move" : "icon1"} ${
          pencegahan || diagnosa || tingkatan || tipe || mitos || faqs
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon-gejala"}`}
        onClick={() => {
          setTentangPeka(!tentangPeka);
        }}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff" }}>Tentang Peka.ai</h3>
      </div>
      {/* 2 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${gejala ? "icon-move-gejala" : "icon2"} ${
          tentangPeka ||
          pencegahan ||
          diagnosa ||
          tingkatan ||
          tipe ||
          mitos ||
          faqs
            ? "hide-icon"
            : ""
        }  `}
        onClick={() => {
          setGejala(!gejala);
        }}
      >
        <img
          src={Circle}
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
          }}
        />
        <h3 style={{ color: "#fff", textAlign: "center" }}>Gejala</h3>
      </div>
      {/* 3 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${pencegahan ? "icon-move" : "icon3"} ${
          tentangPeka || diagnosa || tingkatan || tipe || mitos || faqs
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon-gejala"}`}
        onClick={() => setPencegahan(!pencegahan)}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff" }}>Pencegahan</h3>
      </div>
      {/* 4 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${diagnosa ? "icon-move" : "icon4"} ${
          tentangPeka || pencegahan || tingkatan || tipe || mitos || faqs
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon-gejala"}`}
        onClick={() => setDiagnosa(!diagnosa)}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff" }}>Diagnosa</h3>
      </div>
      {/* 5 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${tingkatan ? "icon-move-right" : "icon5"} ${
          tentangPeka || pencegahan || diagnosa || tipe || mitos || faqs
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-gejala-right"}`}
        onClick={() => setTingkatan(!tingkatan)}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff" }}>Tingkatan</h3>
      </div>
      {/* 6 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${tipe ? "icon-move-right" : "icon6"} ${
          tentangPeka || pencegahan || diagnosa || tingkatan || mitos || faqs
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-gejala-right"}`}
        onClick={() => setTipe(!tipe)}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff" }}>Tipe-tipe</h3>
      </div>
      {/* 7 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${mitos ? "icon-move-right" : "icon7"} ${
          tentangPeka || pencegahan || diagnosa || tingkatan || tipe || faqs
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-gejala-right"}`}
        onClick={() => setMitos(!mitos)}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <div>
          <h3 style={{ color: "#fff", textAlign: "center" }}>Mitos seputar</h3>
          <h3 style={{ color: "#fff", textAlign: "center" }}>
            kanker payudara
          </h3>
        </div>
      </div>
      {/* 8 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${faqs ? "icon-move-right" : "icon8"} ${
          tentangPeka || pencegahan || diagnosa || tingkatan || tipe || mitos
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-gejala-right"}`}
        onClick={() => setFaqs(!faqs)}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff" }}>FAQs</h3>
      </div>
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
        }}
        className={`icon ${cek ? "icon-move" : "icon0"} ${
          pencegahan ||
          diagnosa ||
          tingkatan ||
          tipe ||
          mitos ||
          faqs ||
          tentangPeka
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon-gejala"}`}
        onClick={() => {}}
      >
        <img
          src={Circle}
          style={{ position: "absolute", width: "200px", height: "200px" }}
        />
        <h3 style={{ color: "#fff", textAlign: "center", zIndex: "99" }}>
          Cek potensi kanker payudaramu disini yuk
        </h3>
      </div>

      {/* Slide 1 */}
      <div style={{}} className={`center fade ${tentangPeka && "down"}`}>
        <Card
          title="Apa itu Peka.ai"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <b>Peka.ai</b> adalah sebuah web interaktif yang dapat membantu kamu
          dalam mengetahui informasi tentang kanker payudara mulai dari
          penyebab, gejala, diagnosa, hinggu mitos seputar kanker payudara.
        </Card>
      </div>

      <div style={{}} className={`center fade ${tentangPeka && "down-down"}`}>
        <div>
          <Card
            title="Dan apa itu kanker payudara?"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <b>Kanker payudara</b> adalah kondisi ketika sel kanker terbentuk di
            jaringan payudara. Kanker bisa terbentuk di kelenjar yang
            menghasilkan susu (lobulus), atau di saluran (duktus) yang membawa
            air susu dari kelenjar ke puting payudara. Kanker juga bisa
            terbentuk di jaringan lemak atau jaringan ikat di dalam payudara.(
            <a
              href="https://www.alodokter.com/kanker-payudara"
              target="_blank"
              style={{ textDecorationLine: "underline" }}
            >
              https://www.alodokter.com/kanker-payudara
            </a>
            )
          </Card>
        </div>
      </div>
      {/* Slide 2 */}
      <div style={{}} className={`center fade ${gejala && "down"}`}>
        <div style={{}}>
          <Card
            title="Apa aja sih gejala kanker payudara?"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          ></Card>
        </div>
      </div>
      <div style={{}} className={`left gejala ${gejala && "right"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          Adanya benjolan di payudara atau penebalan jaringan yang terasa
          berbeda dari jaringan di sekitarnya
        </div>
      </div>
      <div style={{}} className={`from-right gejala ${gejala && "to-left"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          Perubahan pada bentuk dan ukuran payudara
        </div>
      </div>
      <div style={{}} className={`left2 gejala ${gejala && "right2"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          Benjolan atau pembengkakan di bawah ketiak
        </div>
      </div>
      <div style={{}} className={`from-right2 gejala ${gejala && "to-left2"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          Pengelupasan kulit areola dan kulit payudara
        </div>
      </div>
      <div style={{}} className={`left3 gejala ${gejala && "right3"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          Nyeri dan pembengkakan pada payudara
        </div>
      </div>
      <div style={{}} className={`from-right3 gejala ${gejala && "to-left3"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          Darah ke luar dari puting payudara
        </div>
      </div>

      {/* Slide 3 */}
      <div style={{}} className={`center fade ${pencegahan && "down"}`}>
        <div>
          <Card
            title="Kanker payudara bisa dicegah melalu beberapa cara berikut!"
            style={{ backgroundColor: "rgba(255,255,255,0.3)", width: "720px" }}
          ></Card>
        </div>
      </div>
      <div className={`fade-center ${pencegahan && "fade-center-aktif-faqs"}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel2 style={{ width: "900px" }}>
            <Card
              title="Rutin melakukan pemeriksaan payudara sendiri (SADARI)"
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "0px 50px",
              }}
            >
              Dengan rutin melakukan SADARI, seorang wanita akan semakin
              mengenali payudaranya sendiri, sehingga bila terdapat kelainan
              seperti perubahan bentuk atau muncul benjolan, dapat segera
              memeriksakan diri ke dokter. SADARI baik dilakukan setiap bulan di
              hari ke 7-10 setelah haid pertama.
            </Card>

            <Card
              title="Rutin melakukan pemeriksaan payudara klinis (SADANIS)"
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "0px 50px",
              }}
            >
              SADANIS merupakan pemeriksaan payudara yang dilakukan oleh petugas
              medis. Diskusikan dengan dokter mengenai kapan waktu yang tepat
              memulai SADANIS dan pemeriksaan penyaring kanker payudara, yaitu
              foto Rontgen payudara (mammografi), serta risiko dan manfaatnya.
            </Card>
            <Card
              title="Olahraga rutin"
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "0px 50px",
              }}
            >
              Lakukan olahraga 30 menit setiap hari.
            </Card>
            <Card
              title="Berhati-hati dalam melakukan terapi pengganti hormon pasca menopause"
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "0px 50px",
              }}
            >
              Kombinasi terapi hormon bisa meningkatkan risiko kanker payudara.
              Konsultasikan dengan dokter manfaat dan risiko terapi pengganti
              hormon.
            </Card>
            <Card
              title="Pertahankan berat badan ideal. "
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "0px 50px",
              }}
            >
              Bila memiliki berat badan berlebih, konsultasikan dengan dokter
              mengenai strategi untuk menurunkan berat badan dan agar berat
              badan tetap
            </Card>
          </Carousel2>
        </div>
      </div>

      {/* Slide 4 */}
      <div style={{}} className={`center fade ${diagnosa && "down"}`}>
        <div style={{}}>
          <Card
            title="Diagnosa kanker payudara"
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              textAlign: "justify",
            }}
          >
            <b>Tes mammografi</b> adalah tes yang biasa dilakukan untuk
            mendiagnosis kanker payudara, khususnya pada stadium awal. Meski
            umumnya tes ini bisa mendeteksi benjolan pada payudara ganas atau
            tidak, namun tetap bisa terjadi kesalahan 10 hingga 15 persen,
            karena mammografi bukan merupakan tes untuk memastikan kanker
            payudara. Tes lain yang umum dijalankan untuk kanker payudara adalah
            USG mammae. Pada tes ini, gelombang suara akan menghasilkan gambaran
            di dalam payudara, sehingga diketahui apakah benjolan yang muncul
            berupa struktur padat atau kista yang berisi cairan. Jika
            diperlukan, tes MRI bisa dilakukan untuk memberi gambaran yang lebih
            jelas daripada hasil yang didapatkan dari tes mammografi atau USG.
            Untuk mengetahui secara pasti apakah pasien menderita kanker
            payudara, dokter akan melakukan biopsi yaitu, yaitu dengan memeriksa
            sampel jaringan di laboratorium. Sampel akan diteliti untuk
            mengetahui jenis sel yang menyebabkan benjolan atau kanker, tingkat
            agresifitas kanker, dan apakah sel tersebut mengandung reseptor
            hormon atau protein (<i>ER</i>, <i>PR</i>, dan <i>HER2</i>).
          </Card>
        </div>
      </div>

      {/* Slide 5 */}
      {tingkatan && (
        <div className={`fade-center ${tingkatan && "fade-center-aktif"}`}>
          <div style={{ display: "flex" }}>
            <Chrono
              hideControls
              items={items}
              theme={{ primary: "black", secondary: "#ff1493" }}
            ></Chrono>
          </div>
        </div>
      )}
      <div style={{}} className={`center fade ${tingkatan && "down"}`}>
        <div style={{}}>
          <Card
            title="Kenali tingkatan kanker payudara"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          ></Card>
        </div>
      </div>
      {/* Slide 6 */}
      <div style={{}} className={`center fade ${tipe && "down"}`}>
        <div style={{}}>
          <Card
            title="Yuk kenali juga tipe-tipe kanker payudara"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          ></Card>
        </div>
      </div>
      <div className={`fade-center ${tipe && "fade-center-aktif"}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{}}>
              <Card
                title="Ductal carcinoma in situ"
                style={{
                  width: "400px",
                  height: "150px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "10px",
                }}
              >
                Jenis kanker ini termasuk kanker stadium awal dan mudah diobati.
                Namun demikian, kanker ini bisa menyebar ke jaringan sekitarnya
                jika tidak segera ditangani.
              </Card>
            </div>
            <div style={{}}>
              <Card
                title="Lobular carcinoma in situ"
                style={{
                  width: "400px",
                  height: "150px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "10px",
                }}
              >
                Adalah kanker yang tumbuh di lobulus. Sama seperti ductal
                carcinoma in situ, kanker ini tidak menyebar ke jaringan
                sekitarnya.
              </Card>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <Card
                title="Invasive ductal carcinoma"
                style={{
                  width: "400px",
                  height: "150px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "10px",
                }}
              >
                Kanker ini tumbuh di duktus dan bisa menyebar ke jaringan
                sekitarnya, bahkan bisa menyebar ke area tubuh yang lain. Jenis
                kanker ini terjadi pada 70-80% kasus kanker payudara.
              </Card>
            </div>
            <div>
              <Card
                title="Invasive lobular carcinoma"
                style={{
                  width: "400px",
                  height: "150px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "10px",
                }}
              >
                Adalah kanker yang tumbuh di lobulus dan bisa menyebar ke
                jaringan sekitarnya. Kanker ini terjadi pada 10% kasus kanker
                payudara.
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 7 */}
      <div style={{}} className={`center fade ${mitos && "down"}`}>
        <div style={{}}>
          <Card
            title="Awas, ada mitos juga tentang kanker payudara!"
            style={{ width: "570px", backgroundColor: "rgba(255,255,255,0.3)" }}
          ></Card>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom1 ${mitos && "to-top1"}`}
      >
        {/* <img src={Awan} style={{ position: "fixed" }} className="awan1" /> */}
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <b>Kanker payudara itu menyakitkan?</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom3 ${mitos && "to-top3"}`}
      >
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
            width: "250px",
          }}
        >
          <b>Hanya wanita saja yang dapat terkena kanker payudara</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom4 ${mitos && "to-top4"}`}
      >
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <b>Kanker payudara selalu berupa benjolan</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom5 ${mitos && "to-top5"}`}
      >
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
            width: "350px",
          }}
        >
          <b>
            Pengobatan untuk kanker payudara adalah dengan mengambil seluruh
            bagian payudara
          </b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom6 ${mitos && "to-top6"}`}
      >
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
            width: "350px",
          }}
        >
          <b>Menderita kanker payudara berarti “vonis mati”</b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom7 ${mitos && "to-top7"}`}
      >
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
            width: "400px",
          }}
        >
          <b>
            Kanker payudara dapat terjadi jika terlalu sering melakukan
            mammogram
          </b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom8 ${mitos && "to-top8"}`}
      >
        <div
          style={{
            color: "#fff",
            border: "5px solid rgba(0,0,0,0.5)",
            padding: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "10px",
            textAlign: "center",
            width: "300px",
          }}
        >
          <b>Kanker payudara disebabkan oleh keturunan dari keluarga</b>
        </div>
      </div>
      {/* Slide 8 */}
      <div
        style={{ width: "820px" }}
        className={`center fade ${faqs && "down"}`}
      >
        <div style={{}}>
          <Card
            title=" Nah, ini kumpulan pertanyaan-pertanyaan seputar kanker payudara"
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          ></Card>
        </div>
      </div>
      <div className={`fade-center ${faqs && "fade-center-aktif-faqs"}`}>
        <div style={{ flex: 1, padding: "50px" }}>
          <Slider
            {...settings}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <div style={{ display: "flex" }}>
              <div style={{}}>
                <Card
                  title="Apa saja faktor resikonya?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  <b>Usia</b>. Mayoritas kasus kanker payudara terjadi pada
                  perempuan di atas 50 tahun. Tetapi ada juga pada usia 40-49
                  tahun dan bahkan usia 18 tahun. Lalu <b>faktor genetik</b>,
                  yakni memiliki anggota keluarga yang mengalami kanker
                  payudara. Selain itu, memakai kontrasepsi oral dalam jangka
                  waktu lama, menstruasi pertama di bawah usia 12 tahun dan
                  riwayat tumor jinak--lebih berisiko mengalami kanker payudara.{" "}
                  <b>Faktor lainnya</b>, melahirkan anak pertama di atas usia 35
                  tahun, mengalami menopause di atas usia 52 tahun, pola hidup
                  tak sehat yang menyebabkan kelebihan berat badan, jarang
                  berolahraga, merokok.
                </Card>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <Card
                  title="Mengapa berat badan berlebih beresiko kena kanker payudara?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Jaringan lemak meningkatkan produksi estrogen. Estrogen yang
                  berlebihan sering dikaitakn dengan pemicu kanker payudara.
                </Card>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <Card
                  title="Menyusui bisa turunkan resiko?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Menyusui minimal empat bulan membuat sel payudara matang.
                  Selain itu, hormon prolaktin bisa menekan estrogen (sehingga
                  tidak berlebihan). Estrogen yang berlebihan sering dikaitan
                  dengan pemicu kanker payudara. Ibu-ibu muda yang belum
                  berpengalaman, yang ambang nyerinya rendah, sakit sedikit
                  tidak mau menyusui, lama-lama ASI nya berkurang.
                </Card>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <Card
                  title="Ukuran payudara berpengaruh pada risiko terkena kanker?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Ukuran yang besar lebih tinggi risikonya, karena jaringan (di
                  payudaranya) lebih banyak.
                </Card>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <Card
                  title="Kondisi payudara yang perlu dicermati?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Ada benjolan keras pada payudara atau daerah sekitar ketiak.
                  Biasanya kondisi ini tidak menimbulkan rasa sakit. Kondisi
                  lainnya, ada perubahan ukuran atau bentuk payudara, seperti
                  pembengkakan dan munculnya lekukan pada kulit payudara. Selain
                  itu, ada perubahan pada permukaan payudara, seperti kulit yang
                  mengeras, kulit mengelupas, berwarna kemerahan atau seperti
                  kulit jeruk. Terakhir, ada perubahan pada puting, misalnya
                  puting tertarik ke dalam atau keluar cairan dari puting.
                </Card>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <Card
                  title="Pemeriksaan lainnya?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Sadanis atau pemeriksaan yang dilakukan tenaga medis.
                  Perempuan yang berisiko tinggi sebaiknya melakukan pemeriksaan
                  ini setiap dua tahun sekali ketika memasuki usia 20 tahun. Usg
                  dan mamografi. Ultrasonografi atau USG dilakukan pada
                  perempuan yang masih berusia di bawah 40 tahun, ketika
                  jaringan payudara masih padat. Pada usia di atas 40 tahun,
                  dapat dilakukan pemeriksaan mamografi.
                </Card>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <Card
                  title="Perlu biopsi untuk deteksi kanker?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Biopsi dilakukan kalau ada kecurigaan ke arah keganasan. Dulu,
                  biopsi dilakukan di kamar operasi dengan pembiusan umum,
                  diambil sampel. Sekarang, biopsi bisa dilakukan di poliklinik,
                  namanya core biopsy. Pasien tidak perlu dipuasakan.
                </Card>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <Card
                  title="Yang bisa dilakukan untuk cegah kena kanker?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Aktif berolahraga, dewasa minimal 75-150 menit dalam seminggu,
                  sementara anak-anak 3 kali seminggu. Pilih olahraga yang
                  intensitasnya sedang hingga tinggi. Kurangi konsumsi daging
                  merah dan daging olahan, perbanyak konsumsi sayur dan buah.
                  Pilih, makanan yang tergolong while grain atau produk makanan
                  yang menggunakan biji-bijian serelia utuh seperti gandum,
                  jagung dan quinoa. Selain itu, hindari konsumsi alkohol.
                </Card>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <Card
                  title="Bila terdeteksi kanker, payudara pasti diangkat? Lalu apa pilihan terapinya?"
                  style={{
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  Ada beberapa pilihan terapi, salah satunya pembedahan. Dulu,
                  dilakukan pengangkatan payudara yang terkena kanker. Sekarang,
                  bisa mempertahankan payudara. Bahkan setelah diangkat pun bisa
                  dibuat payudara baru (breast conserving surgery). Selain itu
                  ada kemoterapi, yakni pemberian obat untuk memperkecil ukuran
                  sel tumor. Efeknya, bisa bekerja ke semua sel, tidak hanya sel
                  ganas. Bisa ke folikel rambut, mukosa mulut, makanya rambut
                  pasien rontok, atau pasien sering sariawan. Terapi lainnya
                  adalah radioterapi atau pemberian sinar berkekuatan tinggi
                  seperti sinar x dan sinar gama untuk menghancurkan sel kanker.
                  Terapi ini biasanya dilakukan setelah pembedahan untuk
                  membersihkan sisa-sisa sel kanker atau sebelum pembedahan
                  disertai kemoterapi, untuk memperkecil ukuran sel kanker.
                </Card>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
