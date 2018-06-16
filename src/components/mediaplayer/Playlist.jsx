import React from 'react';
import { view } from 'react-easy-state';

import PlaylistItem from './PlaylistItem';
import musicStore from './../../stores/musicStore';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 5px 5px 10px',
  },
  actions: {
    width: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointer: {
    cursor: 'pointer',
  },
};

class Playlist extends React.Component {
  _handleTrackClick(track) {
    this.props.onTrackClick(track);
  }

  _focusNowPlayingItem = id => {
    // console.log(document.getElementById(id));
    // document.getElementById(id).scrollTop = 10;
  };

  render() {
    const { tracks, currentTrack } = this.props;
    return (
      <div className="media-playlist">
        <div className="media-playlist-header">
          <div className="media-playlist-title" style={styles.row}>
            QUEUE{' '}
            <div
              style={styles.pointer}
              onClick={() => {
                musicStore.clearNowPlayingList();
              }}
            >
              Clear All
            </div>
          </div>
        </div>
        <div
          style={{
            height: '100%',
            overflow: 'scroll',
            paddingBottom: 30,
          }}
        >
          <div className="media-playlist-tracks">
            {tracks.map((track, position) => (
              <PlaylistItem
                key={track.label + position}
                track={track}
                position={position}
                currentTrack={currentTrack}
                onItemClick={() => this._handleTrackClick(track)}
              />
            ))}
            {this._focusNowPlayingItem(currentTrack.id)}
          </div>
        </div>
      </div>
    );
  }
}

export default view(Playlist);
