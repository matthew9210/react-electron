import React, { Component } from 'react';
import './frame.css';

class frame extends Component
{
    render() {
        return (
            <div className="frame">
              <div className="frame-header">스키마</div>
              <div className="frame-header">테이블</div>
              <div className="frame-header">컬럼</div>
              <div className="frame-header">주석</div>
              <div className="frame-body">본문</div>
              <div className="frame-footer">하단</div>
            </div>
        )
    }
}

export default frame