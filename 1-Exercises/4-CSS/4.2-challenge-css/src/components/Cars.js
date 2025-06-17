import styles from './Cars.module.css'

const Cars = ({cor, placa, km}) => {
  return (<div>
    <ul className={styles.carsClass}>
        <li>Cor: {cor}</li>
        <li>Placa: {placa}</li>
        <li>Quilometragem: {km}</li>
    </ul>
  </div>);
};

export default Cars;