import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import logo from './img/logo.svg'

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`



export default class ScrollExample extends React.Component {
  render() {
    return (
      <div>


        <Parallax ref={ref => (this.parallax = ref)} pages={2}>

          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ backgroundColor: '#282c34' }}
          />

          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#0091bd' }}
          />


        <ParallaxLayer offset={0.5} speed={0.8}>
          <div style={{ 'text-align':'center', 'color':'white' }}>
            <h3>Efficient data engineering.</h3>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={5}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>


        </Parallax>
      </div>
    )
  }
}
