class App extends React.Component {
  render() {
    // 2. access data as props
    const lunch = this.props.lunch
    return (
      <div>{lunch.name}</div>
    )
  }
}
