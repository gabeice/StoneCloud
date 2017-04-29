# StoneCloud

[StoneCloud live][stone-cloud]

[stone-cloud]: https://stone-cloud.herokuapp.com/#/

StoneCloud is a full-stack web application inspired by SoundCloud which allows users to upload, play, edit and comment on music files. It uses a PostgreSQL database, has a backend managed by Ruby on Rails and a Redux architectural framework for the frontend.

## Features & Implementation

### Track Rendering, Playback and Editing

Tracks are stored in the database with column entries for title and artist, as well as image files for cover art and the audio files themselves, both of which are uploaded and handled using the Ruby 'paperclip' gem.

On the frontend, tracks can be viewed on both the index page--accessed by typing a query into the search bar--and individual show pages, which display additional information such as comments on the track, likes, etc. Show pages also have waveforms plotting the audio frequency of the associated track, which show the progress of the song when it is played.

### Playbar

Clicking on a play button on either an index item or a show page causes a playbar to appear at the bottom of the screen, with track info, progress info and play controls. It remains on the screen as long as the song is playing, irrespective of which page the user navigates to.

### Tracklist

The site keeps track of a song queue that the user can manipulate by adding or removing songs, which will play in the order specified. Users can navigate the queue either by clicking on items in the tracklist or using the playbar's forward and back buttons. Tracklist clears when the final song is finished playing.
