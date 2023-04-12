import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";

function AboutCompany() {
  return (
    <div style={{position: "relative"}}>
      <Heading /> {/* Заголовок и кнопка справа */}
      <div className='mt-5 d-flex flex-column gap-5'>
        <div className='d-flex justify-content-end'>
          <div style={{flexGrow: 1, marginRight: "40px"}}>
            <General /> {/* Основная информация вроде названия, типа и телефона */}
          </div>
          <div className="position-relative ms-5" style={{width: "100%", height: "100%"}}>
            <Addresses style={{position: "absolute", top: 0, right: 0, bottom: 0, left: 0}}/> {/* Список доступных адресов заведений */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
