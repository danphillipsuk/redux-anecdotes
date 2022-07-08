// import { useSelector } from "react-redux"
import { connect } from "react-redux"

// const Notification = () => {
//   const notification = useSelector(state => state.notification)
//   if(!notification) {
//     return null
//   }

const Notification = (props) => {
  if (!props.notification) return null
  

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  return (
        <div style={style}>
          {props.notification}
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
