# Coup

Run application: 
  1. Open a terminal 
    a. Navigate to coup folder: coup
    b. Run server: npm run start
  2. Open a second terminal
    a. Navigate to client folder: coup/client
    b. Run game: npm run start
  3. Add a second player
    a. Copy and paste the URL of the localhost from #2 to a new tab

Play current version of game:
  1. First player that joined should have the prompt message of "Choose an Action" to indicate it's their turn
    a. However, I haven't coded to prevent the other players from clicking the actions yet, because I wanted to test that the buttons worked properly
  2. Current version allows any player to click the actions
    a. When a player chooses an action, a message will be sent to the other players in the console which is in the inspect tool.
    
I created this application based on https://www.freecodecamp.org/news/how-to-build-a-multiplayer-card-game-with-phaser-3-express-and-socket-io/ tutorial and the Github repository https://github.com/sominator/multiplayer-card-project.
