import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Spring, animated, config } from 'react-spring/renderprops'


import './App.css';

// components
import NavBar from './components/NavBar/';
import Button from './components/Button/';

// scenes
import LandingScene from './scenes/Landing/';
import CloudsScene from './scenes/Clouds/';



class App extends React.Component {

  state = { y: 0 }
  el = React.createRef()
  spring = React.createRef()
  setY = () => this.setState({ y: Math.round(Math.random() * 750) + 50 })
  stop = () => this.spring.current.stop()

  render () {
    const y = this.el.current ? this.el.current.scrollTop : 0


    return (
      <div className="main">
        
        <NavBar />


        <div>
          <Parallax ref={ref => (this.parallax = ref)} pages={2}>

            <ParallaxLayer
              offset={0}
              speed={1}
              style={{ backgroundColor: '#282c34' }}
            />

            <ParallaxLayer
              offset={1}
              speed={2}
              style={{ backgroundColor: '#0091bd' }}
            />


          <ParallaxLayer offset={0.5} speed={0.8}>
            <LandingScene />
            <Button text="HERE" onClick={this.setY} />
          </ParallaxLayer>


          <ParallaxLayer offset={1} speed={5}>
            <CloudsScene />
          </ParallaxLayer>


          </Parallax>
        </div>

      </div>
    );
  }
}

export default App;
