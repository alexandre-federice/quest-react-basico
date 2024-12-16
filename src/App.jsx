import React from 'react';
import './App.css';
import ColorfulUppercaseText from './components/colorfulUppercaseText';
import Button from './components/button';

function App() {
  return (

    <>

      <div>
        <h1>Quest React Básico</h1>
        <ColorfulUppercaseText className="texto" text="Exemplo de Texto Colorido e em Maiúsculas" color="#DAA520" />
        <ColorfulUppercaseText className="texto" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus orci, ornare eu dui sit amet, sagittis vehicula tellus. Morbi pretium, elit at pulvinar tincidunt, urna ante pharetra neque, sed tincidunt sapien dolor fringilla quam. Sed sed hendrerit felis." color="#00FF00" />
      </div>

      <div>
        <h1>Botões com Alerta</h1>
        <Button className="button" label="Baixar CV" />
        <Button className="button" label="Enviar Mensagem" />
        <Button className="button" label="Ver Projetos" />
      </div>

    </>

  );
}

export default App