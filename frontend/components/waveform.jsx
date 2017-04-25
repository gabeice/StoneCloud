import React, { Component } from 'react';

class WaveForm extends Component {
  generate() {
    let box = [];
    for(let i=0; i<150; i++) {
      box.push(0);
    }
    return box.map((num, idx) => <div key={idx} className="waveslice"></div>);
    // box.forEach(slice => slice.style.height = slice.height);
    // return box;
  };

  componentDidMount() {
    for(let i=0; i<150; i++) {
      $('.waveslice')[i].style.height = `${(50 + Math.floor(Math.random() * 40))}px`
    }
  }

  render() {
    return(
      <section className="waveform">
        {this.generate()}
      </section>
    );
  }
}

export default WaveForm;
