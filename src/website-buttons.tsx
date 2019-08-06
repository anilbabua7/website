import React from 'react'
import { Button } from '@material-ui/core'

class WebsiteButtons extends  React.Component<any, any>{
    
    render() {
        return (
            <div>
                <span className="website-buttons">
                    <Button variant="contained" color="primary" onClick={() => this.props.setComponent('home')}>Home</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary" onClick={() => this.props.setComponent('programs')}>Programs</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary" onClick={() => this.props.setComponent('read')}>Read</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary" onClick={() => this.props.setComponent('gallery')}>Gallery</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary" onClick={() => this.props.setComponent('history')}>History</Button>
                </span>
            </div>
        );
    }
}

export default WebsiteButtons;