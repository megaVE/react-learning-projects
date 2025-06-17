import './App.css';
import UserDetails from './components/UserDetails.js';

function App() {
  const arrayPessoas = [
    {id: 0, nome: "Żoakim", idade: 19, profissao: "Auxiliar de Loja"},
    {id: 1, nome: "Rozalyna", idade: 25, profissao: "Dona de Casa"},
    {id: 2, nome: "Ven'kina", idade: 24, profissao: "Mercenária"},
    {id: 3, nome: "Nina", idade: 12, profissao: "Enfermeira"},
  ];
  return (
    <div>
      <h1>Desafio 4</h1>
      {arrayPessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} id={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
      ))}
    </div>
  );
};

export default App;