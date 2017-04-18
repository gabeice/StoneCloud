# StoneCloud

[Heroku link][heroku]

[Trello link][trello]

[heroku]:
[trello]: https://trello.com/b/dRZt4EBE/stonecloud

## Minimum Viable Product

StoneCloud is a web application inspired by SoundCloud built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Track pages
- [ ] Searchable tracks
- [ ] Track playback
- [ ] Comments
- [ ] User pages
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Tracks Model, API, and components (2 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

### Phase 3: Playback (1 day)

**Objective:** Tracks can be played from their show pages.

### Phase 4: Search (2 days)

**Objective:** Users can search the database and play tracks from the search page.

### Phase 5: Comments (1 day)

**Objective:** Users can add comments to tracks, which are then visible on the track's show page.

### Phase 6: User Pages (1 day, W2 Th 6pm)

**Objective:** Users have profile pages with their posted tracks, listening history, etc.

### Phase 7: - Pagination / infinite scroll for Tracks Search page (1 day, W2 F 6pm)

**Objective:** Add infinite scroll to Tracks Search page

### Bonus Features (TBD)
- [ ] Tracks have waveforms which show playback progress
- [ ] Users can create playlists
- [ ] Users can 'like' tracks
