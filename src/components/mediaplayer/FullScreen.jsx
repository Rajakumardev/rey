import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import ReactGA from 'react-ga';

import { GA_EVENT_CAT_PLAYER, GA_EVENT_ACTION_FULLSCREEN } from '../../config/Constants';
import { primaryColorLight } from './../../config/Colors';

class Fullscreen extends Component {
  _handleFullscreen = () => {
    ReactGA.event({
      category: GA_EVENT_CAT_PLAYER,
      action: GA_EVENT_ACTION_FULLSCREEN,
      value: 1,
    });
    this.props.media.fullscreen();
  };

  render() {
    const { isFullscreen } = this.context;
    return (
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        className={this.props.className}
        onClick={() => this._handleFullscreen()}
      >
        <circle fill={primaryColorLight} cx="18" cy="18" r="18" />
        {!isFullscreen ? (
          <g>
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="9.875,16.5 9.875,11.375 15,11.375" />
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="26.125,16.5 26.125,11.375 21,11.375" />
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="9.875,19.5 9.875,24.625 15,24.625" />
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="26.125,19.5 26.125,24.625 21,24.625" />
          </g>
        ) : (
          <g>
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="14.125,10.5 14.125,15.625 9,15.625" />
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="21.875,10.5 21.875,15.625 27,15.625" />
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="14.125,25.5 14.125,20.375 9,20.375" />
            <polyline fill="none" stroke="#CDD7DB" strokeWidth="1.75" points="21.875,25.5 21.875,20.375 27,20.375" />
          </g>
        )}
      </svg>
    );
  }
}

export default withMediaProps(Fullscreen);
