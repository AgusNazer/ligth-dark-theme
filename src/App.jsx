
import { useState } from 'react';
import './App.css';
import Card from './componentes/Card'; 
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.jpeg';
import foto3 from './img/foto3.jpg';
import Button from './componentes/Button';
import Footer from './componentes/Footer';


function App() {
  
    let [theme, setTheme] = useState('Light');

function onClickFn(){
    if(theme === 'Light'){
      theme = setTheme('Dark')
    }else{
      setTheme('Light')
    }
}

  return (
    <div className={'main__container ' + theme} >
        <Button
        onClickFn = {onClickFn}
        value = {theme == 'Dark' ? 'Light' : 'Dark'}
        />
       <Card 
          img={foto1}
          name='Manuel Lopez'
          description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem fuga repellendus dignissimos deleniti veritatis, aperiam et, iusto mollitia autem facere, cumque ipsum accusantium vitae laudantium perferendis suscipit beatae! Laudantium?' >
       </Card>
       <Card 
          img={foto2}
          name='Juana Perez'
          description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem fuga repellendus dignissimos deleniti veritatis, aperiam et, iusto mollitia autem facere, cumque ipsum accusantium vitae laudantium perferendis suscipit beatae! Laudantium?' >
       </Card>
       <Card 
          img={foto3}
          name='Pablo Julio'
          description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem fuga repellendus dignissimos deleniti veritatis, aperiam et, iusto mollitia autem facere, cumque ipsum accusantium vitae laudantium perferendis suscipit beatae! Laudantium?' >
       </Card>
       <Footer></Footer>
    </div> 
    
     
  );
}



export default App;
