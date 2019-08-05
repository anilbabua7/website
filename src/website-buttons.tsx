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
                    <Button variant="contained" color="primary">Programs</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary">Read</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary" >Gallery</Button>
                </span>
                <span className="website-buttons">
                    <Button variant="contained" color="primary">History</Button>
                </span>
            </div>
        );
    }
}

export default WebsiteButtons;