import { useCustomization } from "../context/Customization";

const Configurator = () => {
  const {
    shoesColors,
    shoesColor,
    setShoesColor,

  } = useCustomization();

  return (
    <div className="configurator">
         <div className="configurator__section">
      </div>
      <div className="configurator__section">

        <div className="configurator__section__values">
          {shoesColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === shoesColor.color ? "item--active" : ""
              }`}
              onClick={() => setShoesColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Configurator;
