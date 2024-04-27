import { createContext, useState } from "react";

export const CreateEventContext = createContext({
  type: "",
  setType: (type) => {},
  owner: "",
  setOwner: (owner) => {},
  name: "",
  setName: (name) => {},
  guest: 0,
  setGuest: (guest) => {},
  location: "",
  setLocation: (location) => {},
  date: "",
  setDate: (date) => {},
  price: 0,
  setPrice: (price) => {},
  paymentMethod: "",
  setPaymentMethod: (paymentMethod) => {},
});

function CreateEventContextProvider({ children }) {
  const [type, setType] = useState("");
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [guest, setGuest] = useState(0);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const value = {
    type: type,
    setType: setType,
    owner: owner,
    setOwner: setOwner,
    name: name,
    setName: setName,
    guest: guest,
    setGuest: setGuest,
    location: location,
    setLocation: setLocation,
    date: date,
    setDate: setDate,
    price: price,
    setPrice: setPrice,
    paymentMethod: paymentMethod,
    setPaymentMethod: setPaymentMethod,
  };

  return (
    <CreateEventContext.Provider value={value}>
      {children}
    </CreateEventContext.Provider>
  );
}

export default CreateEventContextProvider;
