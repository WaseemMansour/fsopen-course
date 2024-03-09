```mermaid
sequenceDiagram
    actor user
    participant browser
    participant server
    
    user->>browser: Write something in text field
    user->>browser: Click save button

    Note right of browser: The browser rerender the notes
    browser->>user: Updated list now includes user new item
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 status code - note created successfully
    deactivate server
    
```
