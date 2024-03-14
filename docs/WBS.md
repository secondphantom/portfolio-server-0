---
title: "WBS"
dateCreated: "2024-02-08"
dateModified: "2024-03-13"
---
## server

- [X] auth api
  - [X] sign-up
    - [X] service
    - [X] controller
      - [X] validator
    - [X] infra
      - [X] email sender
      - [X] user repo
      - [X] jwt
      - [X] hash
    - [X] domain
      - [X] user
  - [X] resend-verify-email
    - [X] service
    - [X] controller
      - [X] vlidator
  - [X] verify-email
    - [X] service
    - [X] controller
      - [X] validator
  - [X] sign-in
    - [X] service
    - [X] controller
      - [X] validator
  - [X] verify-access-token
    - [X] service
    - [X] contoller
  - [X] refresh-access-token
    - [X] service
    - [X] controller
  - [X] sign-out
    - [X] controller
  - [X] find-password
    - [X] service
    - [X] controller
  - [X] verify-reset-password-token
  - [X] reset-password
- [X] me api
  - [X] profile
    - [X] get
      - [X] service
      - [X] controlleri
    - [X] update
      - [X] service
      - [X] controller
        - [X] validator
  - [X] enrolls
    - [X] create enroll
      - [X] service
      - [X] controller
        - [X] validator
      - [X] infra
        - [X] enroll repo
    - [X] get enrolls by query
      - [X] service
      - [X] controller
        - [X] validator
    - [X] get enrolls by course_id
      - [X] service
      - [X] controller
        - [X] request validator
        - [X] reponse validator
      - [X] infra
        - [X] get enroll with course
    - [X] update enrolls by course_id
      - [X] service
      - [X] controller
        - [X] validator
      - [X] infra
        - [X] update enroll repo by user_id, course_id
- [X] course api
  - [X] create course
    - [X] service
    - [X] controller
      - [X] validator
    - [X] infra
      - [X] youtube api
      - [X] course repo
      - [X] channel repo
    - [X] domain
      - [X] channel
      - [X] course
  - [X] get courses by query
    - [X] init
      - [X] create course scripts
    - [X] service
    - [X] controller
      - [X] validator
  - [X] get course by id
    - [X] service
      - [X] policy
        - [X] update enroll counts
    - [X] controller
      - [X] validator
    - [X] infra
      - [X] config repo
- [X] channel api
  - [X] get channel by channel_id
    - [X] service
    - [X] controller
      - [X] validator
  - [X] get courses list by channel id
- [ ] admin api

## client

- [X] /
  - [X] header
    - [X] nav
  - [X] main
    - [X] create course search bar
    - [X] recent created courses
- [X] /auth
  - [X] middleware
    - [X] check auth
  - [X] /sign-up
  - [X] /sign-in
  - [X] /verify-email
  - [X] /resend-verification-email
  - [X] /find-password
  - [X] /reset-password
- [X] /courses
  - [X] /couses?
    - [X] card
      - [X] enroll state
    - [X] search bar video url
    - [X] order dropdown
    - [X] pagination
    - [X] meta
  - [X] /courses/:id
    - [X] header
      - [X] title
      - [X] links
        - [X] channel
        - [X] youtube
      - [X] enroll / watch btn
        - [X] watch
        - [X] enroll
          - [X] check login
            - [X] login modal
    - [X] body
      - [X] descpription
        - [X] plain text to rich text schema
      - [X] chapters
        - [X] total duration
    - [X] meta
- [X] /watch
  - [X] middleware
    - [X] check auth
  - [X] /course/:id
    - [X] header
      - [X] title
      - [X] chapters on/off toggle
      - [X] dashboard btn
    - [X] footer
      - [X] nav
        - [X] prev
        - [X] next
      - [X] complete
      - [X] settings
    - [X] sidebar
      - [X] chapter
        - [X] header
          - [X] title
          - [X] progress
        - [X] main
          - [X] chapter
            - [X] title
            - [X] complete
            - [X] duration
    - [X] meta
- [X] /channel/:id
  - [X] /courses
    - [X] header
      - [X] name
      - [X] youtube link
    - [X] courses
      - [X] /channel/:id/courses?
        - [X] order
      - [X] pgination
    - [X] meta
- [X] /me
  - [X] /me/profile
  - [X] /me/enrolls
    - [X] order
    - [X] pagination