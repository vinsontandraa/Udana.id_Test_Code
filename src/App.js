import logo from "./img/logo.png";
import logo2 from "./img/logo-footer.PNG";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";

import test from "./img/test.jpg";
import menu1 from "./img/1.PNG";
import menu2 from "./img/2.PNG";
import menu3 from "./img/3.PNG";
import coffee from "./img/coffee.jpg";

import support1 from "./img/kominfo.png";
import support2 from "./img/pse.png";
import support3 from "./img/aludi.png";
import support4 from "./img/cbqa.png";
import support5 from "./img/kan.png";

import "./App.css";

import {fButton} from 'react-floating-action-button'
import {
  Navbar,
  Container,
  Nav,
  Button,
  Carousel,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <div className="App">
          <div className="navbar">
            <Navbar collapseOnSelect expand="sm" fixed="top">
              <Container>
                <img className="logo-nav" alt="" src={logo} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Waralaba</Nav.Link>
                    <Nav.Link href="#features">FAQ</Nav.Link>
                    <Nav.Link href="#pricing">Tentang</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">Masuk</Nav.Link>
                    <Button className="button-nav" variant="warning">
                      Mulai Daftar
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <Row className="noMargin noPadding">
          <Carousel
            className="noMargin noPadding"
            controls={false}
            indicators={false}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={test} alt="First slide" />

              <div className="centered">
                <h1 className="info">Jadilah Investor UMKM & Waralaba</h1>
                <h5 className="sub-info">
                  Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai
                  menjadi investor untuk kemajuan perekonomian bangsa tanpa
                  perlu pusing dengan operasional sehari-hari
                </h5>
                <Button className="sub-button" variant="warning">
                  Investasi Sekarang <i className="fas fa-arrow-right"></i>
                </Button>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="sub-menu-1">
          <Col>
            <h3 className="menu-info">Menjadi Investor UMKM itu gampang</h3>
          </Col>
          <Col>
            <h5 className="sub-menu-info">
              Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana
              saja.
            </h5>
          </Col>
          <Col></Col>
        </Row>

        <Row className="sub-menu-2">
          <Col fluid>
            <img alt="" className="menu-image" src={menu1}></img>
            <h5 className="menu-small">Pilih UMKM</h5>
            <p className="sub-menu-info">
              Temukan usaha yang anda minati pada galeri.
            </p>
          </Col>
          <Col fluid>
            <img className="menu-image" alt="" src={menu2}></img>
            <h5 className="menu-small">Analisa Bisnis</h5>
            <p className="sub-menu-info">
              Lakukan analisa profil bisnis dan pengusaha.
            </p>
          </Col>
          <Col fluid>
            <img alt="" className="menu-image" src={menu3}></img>
            <h5 className="menu-small">Mulai Berinvestasi</h5>
            <p className="sub-menu-info">
              Menjadi investor startup dengan modal minimal 100.000 Rupiah.
            </p>
          </Col>
        </Row>
        <Row className="sub-menu2">
          <h3 className="menu-info">Siap Memulai Berbisnis?</h3>
          <h5 className="sub-menu-info">
            Tentukan bisnis waralaba pilihan Anda sekarang
          </h5>
        </Row>
        <Row className="sub-menu2">
          <Col className="brand-card">
            <Card>
              <Card.Title>F&B</Card.Title>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Text>Rindu Candu Milk Bar</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lihat Detail</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="brand-card">
            <Card>
              <Card.Title>F&B</Card.Title>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Text>Mr. Big</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lihat Detail</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="brand-card">
            <Card>
              <Card.Title>F&B</Card.Title>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Text>Nasi Balap</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lihat Detail</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="sub-menu2">
          <Col className="brand-card">
            <Card>
              <Card.Title>F&B</Card.Title>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Text>Rindu Candu Milk Bar</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lihat Detail</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="brand-card">
            <Card>
              <Card.Title>F&B</Card.Title>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Text>Mr. Big</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lihat Detail</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="brand-card">
            <Card>
              <Card.Title>F&B</Card.Title>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Text>Nasi Balap</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lihat Detail</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="sub-menu2">
          <h5 className="sub-menu-yellow">Lihat semua</h5>
        </Row>
        <div className="help-menu">
          <div class="yellow-menu">
            <Row>
              <Col lg={6}>
                <h3>Kami siap membantu Anda</h3>
                <h5>
                  Apabila Anda ingin mengetahui lebih lanjut mengenai Udana.
                  Silahkan menghubungi kami
                </h5>
              </Col>
              <Col>
                <p className="pt-20">
                  PT Dana Rintis Indonesia <br /> Jl. KH. Hasyim Ashari No.17,
                  Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat Daerah
                  Khusus Ibukota Jakarta, 10130
                </p>
                <p> support@udana.id</p>
                <p>087709999430</p>
              </Col>
            </Row>
          </div>
        </div>
        <footer>
          <Row>
            <Col xs={12} md={2} lg={2}>
              <img alt="" className="footer-logo" src={logo2} />
            </Col>
            <Col xs={12} md={2} lg={2}>
              <p className="footer-info">
                Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir,
                Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10130 <br />
                E: support@udana.id <br />
                W: 087709999430
              </p>
            </Col>
            <Col xs={12} md={2} lg={2}>
              <div class="vertical-menu">
                <p className="footer-info">Perusahaan</p>
                <a href="#ok">Tentang</a>
                <a href="#ok">Hubungi Kami</a>
                <a href="#ok">Syarat & Ketentuan</a>
                <a href="#ok">Kebijakan Privasi</a>
              </div>
            </Col>
            <Col xs={12} md={2} lg={2}>
              <div class="vertical-menu">
                <p className="footer-info">investor</p>
                <a href="#ok">FAQ</a>
                <a href="#ok">Resiko Investasi</a>
              </div>
            </Col>
            <Col xs={12} md={2} lg={2}>
              <p className="footer-info">Social Media</p>{" "}
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </Col>
            <Col xs={12} md={2} lg={2}>
              <p className="footer-info">Didukung oleh</p>{" "}
              <img className="support-image-top" src={support1}></img>
              <img className="support-image-top" src={support2}></img>
              <img className="support-image-top" src={support3}></img>
              <br />
              <img className="support-image" src={support4}></img>
              <img className="support-image" src={support5}></img>
            </Col>
          </Row>
          <Row className="footer-last">
            <p>
              PT DANA RINTIS INDONESIA merupakan perusahaan berbadan hukum yang
              didirikan berdasarkan Hukum Republik Indonesia. Berdiri sebagai
              perusahaan yang masih dalam proses pendaftaran oleh Otoritas Jasa
              Keuangan (OJK) di Indonesia. Perusahaan menyediakan layanan antar
              muka (interface) sebagai penghubung pihak yang memberikan
              pendanaan dan pihak yang membutuhkan pendanaan meliputi pendanaan
              dari individu, organisasi, maupun badan hukum kepada individu atau
              badan hukum tertentu. Perusahaan tidak menyediakan segala bentuk
              saran atau rekomendasi pendanaan terkait pilihan-pilihan dalam
              situs ini. Isi dan materi yang tersedia pada situs Udana.id
              dimaksudkan untuk memberikan informasi dan tidak dianggap sebagai
              sebuah penawaran, permohonan, undangan, saran, maupun rekomendasi
              untuk pendanaan sekuritas, produk pasar modal, atau jasa keuangan
              lainya. Perusahaan dalam memberikan jasanya hanya terbatas pada
              fungsi administratif. Perusahaan tidak memberikan saran, memberi
              kewajiban atau kewajiban lainya untuk jasanya.
            </p>
            <br />
            <p>
              Udana adalah platform urun dana bisnis yang hadir untuk membuka
              akses pendanaan dan investasi bagi semua kalangan berbasis
              teknologi informasi (equity crowdfunding) dimana pebisnis
              menawarkan saham bisnis kepada calon investor baik itu individu
              maupun organisasi:
            </p>
            <br />
            <p>
              Penggunaan Udana diatur sesuai dengan Peraturan Otoritas Jasa
              Keuangan No. 37 Tahun 2018 Pasal 23 tentang Layanan Urun Dana
              melalui Penawaran Saham Berbasis Teknologi Informasi atau Equity
              Crowdfunding (“POJK 37/2018”).
            </p>
            <br />
            <p>Dengan digunakannya layanan ini, kami menyatakan bahwa :</p>
            <ol type="a">
              <li> “OTORITAS JASA KEUANGAN TIDAK MEMBERIKANPERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”</li>
              <li> “INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.”; dan</li>
              <li> “PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.”.</li>
            </ol>
          </Row>
          <Row className="footer-copyright">
            <p>Copyright Udana.id <span>&#169;</span> 2020 by All Rights Reserved.</p>
          </Row>
        </footer>
        <fButton className="chat-image" variant="warning"><a href="#"><FaRocketchat /></a></fButton>{' '}
      </Container>
      {/*


        </div>
        <div className="body">

       */}
    </>
  );
}

export default App;
