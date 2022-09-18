import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Alert = ({ alerts }) =>
    alerts !== null && alerts.length > 0 && alerts.map(alert => (

        <div key={alert.id} className='container'>
            <div className={`alert alert-${alert.alertType} rounded-0 alert-dismissible fade show`} role="alert">
                <strong></strong> {alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>


    ))






Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    //from root reducer state
    alerts: state.alert
})
export default connect(mapStateToProps)(Alert)