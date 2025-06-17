const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        <h2>Usuário {id+1}</h2>
        <p><strong>Nome</strong>: {nome}</p>
        <p><strong>Idade</strong>: {idade} anos</p>
        <p><strong>Profissão</strong>: trabalha como {profissao}</p>
        {idade >= 18 && <ul><li>{nome} pode tirar habilitação!</li></ul>}
    </div>
  );
};

export default UserDetails;