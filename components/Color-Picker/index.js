'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'


class SketchExample extends React.Component {

  state = {
    displayColorPicker: false,
    color: {
      r: this.props.r,
      g: this.props.g,
      b: this.props.b,
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          padding: '5px',
          display: 'inline-block',
          cursor: 'pointer',
          width: '50px',
          height: '50px',
          borderRadius: '50px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        
          <div style={ styles.color } onClick={ this.handleClick } />
        
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }


      </div>
    )
  }
}

export default SketchExample