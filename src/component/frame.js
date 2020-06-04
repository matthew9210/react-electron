import React, { Component } from 'react';
import './frame.css';

class frame extends Component
{
    render() {
        return (
            <div className="frame">
              <div className="frame-header"></div>
              <div className="frame-header"></div>
              <div className="frame-header"></div>
              <div className="frame-header"></div>
              <div className="frame-body"></div>
              <div className="frame-footer"></div>
            </div>
        )
    }
}

export default frame