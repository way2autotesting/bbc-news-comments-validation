@manual
#Scenario 1: Prompt for sign-in and house rules message for unsigned user
Scenario: Unsigned user views article with comments
  Given the user is not signed in
  When the user selects an article with comments
  Then the user should be prompted to sign in or register
  And a message should be displayed saying "Comments must follow the house rules."

@manual
#Scenario 2: Comments show account name and time
Scenario: View comment metadata
  Given the user is signed in or not
  When the user selects an article with comments
  Then the user should see each comment along with the account name and the time it was posted
  And the hyperlink text "house rules." should be clickable

@manual
#Scenario 3: Reply click prompts login for unsigned user
Scenario: Reply click prompts login
  Given the user is not signed in
  When the user clicks the "Reply" button on a comment
  Then the user should be prompted to sign in or register
  And both "Sign in" and "Register" buttons should be enabled

@manual
#Scenario 4: Thumbs up/down click prompts sign-in
Scenario: Like/dislike requires sign-in
  Given the user is not signed in
  When the user clicks the thumbs up or thumbs down icon on a comment
  Then a dialog box should appear prompting sign in or register
  And the dialog box should include an "X" button to close it

@manual
#Scenario 5: Dropdown filters for comment sorting
Scenario: Comment sorting options are visible
  Given the user is signed in or not
  When the user views the comment section of an article
  Then a dropdown should be available to select sorting by:
    | Option           |
    | Latest           |
    | Oldest           |
    | Highest rated    |
    | Most replies     |

@manual
#Scenario 6: Signed-in user sees 'Join the conversation' section
Scenario: Signed-in user sees comment input area
  Given the user is signed in
  When the user selects an article with comments
  Then the user should see the section titled "Join the conversation"
  And a text field limited to 400 characters should be displayed

@manual
#Scenario 7: Signed-in user sees post and cancel buttons
Scenario: Comment submission controls appear on input
  Given the user is signed in
  And the user is on the "Join the conversation" section
  When the user types a comment in the text field
  Then "Post" and "Cancel" buttons should be displayed below the field

@manual
#Scenario 8: Signed-in user sees personalized message
Scenario: Show signed-in user name
  Given the user is signed in
  When the user views the "Join the conversation" section
  Then a subtitle should be shown saying "You're signed in," followed by the user's account name