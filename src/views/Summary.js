import React from 'react'
import SummaryStore from '../stores/SummeryStore'

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: SummaryStore.getSummary()
    }
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onUpdate)
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onUpdate)
  }

  onUpdate = () => {
    this.setState({
      sum: SummaryStore.getSummary()
    })
  }

  render() {
    return (
      <div>Total Count: {this.state.sum}</div>
    )
  }
}

export default Summary