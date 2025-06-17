const WybracWiadomosc = ({funkcja}) => {
  return (
    <div><button onClick={() => funkcja("Zabij się!")}>Kliknij, aby obejrzeć</button></div>
  );
};

export default WybracWiadomosc;