# Danceblocks
[Danceblocks](https://danceblocks.netlify.app/) is a web-based application that helps choreographers visualise their blockings from bird's eye view and renders the 3D audience view.

## Purpose
This project is created to help choreographers visualise 3D audience view, which I find useful for many use-case: 

1. See how the blocking looks even before blocking your dancers.
2. Creating visual effects for audiences at the side.
3. Planning for 360-degree stages for competitions such as Super24.

and so on...

This project will remain open-source and free for the Dance Community to use, share, feedback and improve upon.

## Features
1. **3D Rendering**: Danceblocks can render the audience view of a blocking. You can zoom in and out through mouse scrolls, and rotate the stage around to see it from multiple perspectives. Remember to exit 3D view first before any further editing.
2. **Add, delete and edit dancers**. Assign each dancer a name and color so that they can be easily differentiated. This can be done by clicking the dancer list.
3. **Move dancers around**. You can move dancers by dragging them over to where you want them to be.
4. **Rotate dancers**. In the same place where you edit dancer name and color, you can set the angle for each dancer to face. The dancer will be rotated clockwise from the default angle (facing audience).
5. **Add blocking**. You can change the blocking's name after it's been created. The new blocking preserves dancers so that you don't have to add them in again one by one. View a blocking by clicking on it in the blocking list.
6. **Change blocking ordering**. Have a blocking that you'd rather have at the intro instead of the chorus? Simply click and drag that blocking over to the front.
7. **Changing stage dimensions**. You can change the stage dimensions to fit the stage you are working with. Stages that are too large will be scaled down to fit the screen, but the ratio will be kept.
8. **Share your blockings**. You can download the project and share it with others so that dancers can look through all the blockings and co-choreographers can work on the blockings too!

I've created a google form for feedback, suggestion and bug reports as well! I appreciate every suggestion that can contribute to future iterations to this project.

## Shortcomings
1. The 3D feature is still work in progress. Due to my lack of 3D modeling experience, I've model dancers with cuboids which resulted in roblox-looking dancers. This will have to do until I manage to find help or pick up 3D modeling myself.
2. The current app does not work well on small and touch devices (i.e. mobile phones and tablets) unless you use them with a mouse. This is because features are implemented using mouse drag, hover and clicks. This will be worked on in the future!
3. The updates and improvements might be a little slow. I don't have the proper channels to announce any updates yet, but if there's enough interest I might start a telegram group / channel just for updates on Danceblocks.

## What's next?
1. Go to [Danceblocks](https://danceblocks.netlify.app/) and try it out! The feedback link is in the toolbar.
2. Head over to my [user guide](https://github.com/mgiang2015/danceblocks2/blob/main/docs/userGuide.md) for more explanation about each feature.
3. If you're a 3D or UI/UX designer and would like to help me out with improving the app's design, please contact me at the details below!
4. If you're a developer and would like to contribute to this repo, head over to my developer guide at `docs/developerGuide.md`. You can alternatively clone the repo and run `npm install && npm run start` to play around as well. This will be my first time doing something like this so the documentation might not be the best, I encourage you to contact me as well.

## Contact info
Telegram: [@LEEEEgendary](https://t.me/LEEEEgendary)

Instagram: [@thedecoyg](https://instagram.com/thedecoyg)

LinkedIn: [Le Minh Giang](https://www.linkedin.com/in/le-minh-giang-951a59163/)

## Future features
1. Make a better, more realistic dancer 3D model.
2. Allow users to change each dancer's height and direction they are facing.
3. Allow users to add lighting to the stage. Commonly-used lighting such as spotlight and wash will be implemented first.
4. Allow users to add music track and assign timestamp to each blocking. In between timestamps will be considered transition time which will be animated.

## Next version improvements and rationale
1. Since dancers in a piece does not change, just goes on and off stage: Have a shared array of dancer info for all blockings (ID, name, color) instead of duplicating it each time a new blocking is added.
  - This means updates to dancer info (name, color) will cascade over all blockings which is desired most of the time.
  - This also means deletion / addition of a dancer will cascade over all blockings. This might not be desirable sometimes assuming they only want to exclude the dancer from the current blocking. For addition, the dancer will be placed backstage by default for all blockings. For deletion, users will get a pop-up informing that this would cascade over all blockings they have (front and back) and ask if they only want to move the dancer backstage instead.
2. Animation - Animation over a sequence of consecutive blockings instead of whenever I switch from any 1 blocking to another.
  - More extendable -> The same feature can be applied on 3D view, lighting, music overlay later on without much rewriting.
  - Choreographers use animation to visualise how dancers move between 2 or more consecutive blockings most of the time, rather than 2 random blockings to see traffic and crossing
  - This means there will be a separate animation view / mode (similar to Microsoft Powerpoint where there's edit mode and presentation mode, edit mode doesn't care about animation between slides and will be executed during presentation mode)
