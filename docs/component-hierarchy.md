## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - UserHistory

**UserContainer**
 - UserHeader
 - UserHistory

**TracksContainer**
 - TracksIndex

**SearchResultsContainer**
 - Search
 - TrackIndex

**TracksIndex**
 - TrackIndexItem
  + TrackDetail
    - PlayButton
    - TrackTitle
    - AlbumCover

**NewTrackContainer**
 - NewTrackForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/user/:userId" | "UserContainer" |
| "/home/track/:trackId" | "TracksContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-track" | "NewTrackContainer" |
