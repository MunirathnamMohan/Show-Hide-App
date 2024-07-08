import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstname: false, isLastname: false}

  onFirstname = () => {
    const {isFirstname} = this.state

    this.setState(prevState => ({isFirstname: !prevState.isFirstname}))
  }

  onLastname = () => {
    const {isLastname} = this.state

    this.setState(prevState => ({isLastname: !prevState.isLastname}))
  }

  render() {
    const {isFirstname, isLastname} = this.state

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="header">Show/Hide</h1>
          <div className="btn-container">
            <button className="button" type="submit" onClick={this.onFirstname}>
              Show/Hide Firstname
            </button>
            <button className="button" type="submit" onClick={this.onLastname}>
              Show/Hide Lastname
            </button>
          </div>
          <div className="cards-container">
            {isFirstname ? (
              <div className="first-name-con">
                <h1 className="name">Joe</h1>
              </div>
            ) : null}

            {isLastname ? (
              <div className="second-name-con">
                <h1 className="name">Jones</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
