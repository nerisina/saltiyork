import React from 'react';
import './App.css';
const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      Perdido en la ciudad de Saltillo, Coahuila .
    </div>
    <div>
      Aqui podras encontrar algunas recomendaciones de restaurantes, museos y galerias
      Saltillo es una hermosa ciudad en el Norte de México que si sabes buscar encuentras lugares divertidos.
      Dattebayo!
    </div>
  </div>
);

const Quote = () => (
  <div>
    <Highlight>Back</Highlight> of the <Highlight>net</Highlight>!
  </div>
)

const Highlight = props => <span className="highlight">{props.children}</span>


const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      {/* our navigation component */}
      <Intro />
    </div>
    <div className="flex flex-wrap container">{/* our attractions list component */}</div>
  </div>
)

export default App;
