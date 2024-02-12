import { createContext, useContext, useState } from "react";

const shoesColors = [
  {
    color: "#D27685",
    name: "cream",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#0A043C",
    name: "blue",
  },
  {
    color: "#1B2430",
    name: "dark blue",
  },
  {
    color: "#D24545",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#5B8FB9",
    name: "light blue",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("leather");
  const [shoesColor, setShoesColor] = useState(shoesColors[6]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        shoesColors,
        shoesColor,
        setShoesColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
