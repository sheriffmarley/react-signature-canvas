import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SignaturePad from '../../src/index.tsx'

import * as styles from './styles.module.css'

class App extends Component {
  state = { trimmedDataURL: null }

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
  }

  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png')
    })
  }

  render () {
    const { trimmedDataURL } = this.state
    return <div className={styles.container}>
      <div className={styles.sigContainer}>
        <SignaturePad canvasProps={{ className: styles.sigPad }}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button className={styles.buttons} onClick={this.clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={this.trim}>
          Trim
        </button>
      </div>
      {trimmedDataURL
        ? <img className={styles.sigImage} alt='signature'
          src={trimmedDataURL} />
        : null}
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
