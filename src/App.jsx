import './App.css'
import Poolparty from "./Poolparty.jsx";
import banner_2022 from "./assets/banners/banner_2022.jpg";
import banner_2023 from "./assets/banners/banner_2023.jpg";
import banner_2024 from "./assets/banners/banner_2024.jpg";

import popper_2022 from "./assets/poppers/2022.png";
import popper_2023 from "./assets/poppers/2023.png";
import popper_2024 from "./assets/poppers/2024.png";

function App() {


  return (
    <>
        <Poolparty name={"Leoparty"} className="leoparty" banner={banner_2024} popper={popper_2024} year={2024} link={"https://fotos.fotobox-plus.at/galleries/M_ZP2EOIQMP8"} pwd={"Leoparty"}/>
        <Poolparty name={"Holy Aperoly"} className="holyaperoly" banner={banner_2023} popper={popper_2023} year={2023} link={"https://fotos.fotobox-plus.at/galleries/M_TBRK9A6VSW"} pwd={"Holy Aperoly"}/>
        <Poolparty name={"Hawaii"} className="hawaii" banner={banner_2022} popper={popper_2022} year={2022} link={"https://fotos.fotobox-plus.at/galleries/M_J372A8VL76"} pwd={"Hawaii"}/>
    </>
  )
}

export default App
