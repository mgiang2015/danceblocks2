## Table of content

1. [Layout](#layout)
2. [Dimension](#change-stage-dimensions)
3. [Blocking](#blocking)
    1. [Add blocking](#add-blocking)
    2. [Display blocking](#display-blocking)
    3. [Change blocking order](#change-blocking-order)
    4. [Delete blocking](#delete-blocking)
4. [Dancer](#dancer)
    1. [Dancer list](#dancer-list)
    2. [Add dancer](#add-dancer)
5. [Share your project](#share-your-project)

## Layout

Danceblocks consists of 3 main components: The toolbar on the left, stage in the middle, list of dancers on the right and list of blockings at the bottom.

The toolbar allows you to change stage dimensions, add dancers, add blockings, render 3D stage view, and download your project as a file to share with others. There is a link to the user guide and a google form for feedback as well.

## Change stage dimensions

You can specify the stage dimension that you're working with in meters. The 2D and 3D stage will both change according to your specification.

Dancers will not move according to the new stage dimensions, as their current positions are absolute. For example, if I shrink the stage down, some dancers will be left outside of the stage until you drag them onto the stage area again.

For stage dimensions that are too large, Danceblocks will rescale the stage so that it fits your screen, while preserving the ratio of depth to height. Currently Danceblocks can accommodate a maximum of 19m depth and 28m width.

Similarly, if you want more space, you can scale the stage up accordingly as Danceblocks will not rescale up stages that are too small. For example, if your 11m x 11.5m stage seems to small, you can change the dimensions to 22m x 23m (both x2) to get a larger space to work with.

The ratio of dancer width to stage width is still a work in progress. You might find that the space you give to dancers in Danceblocks is too big or too small. I will be improving on this in the next iterations.

## Blocking

### Add blocking

You can add a new blocking which will appear in the blocking list as "New Blocking". You can then change this name by hovering over the blocking, and click "Edit" to give your blocking a unique name.

The newly created blocking will duplicate the blocking that is currently viewed. This is to make small changes convenient and dancers in the blocking usually don't change unless they have to go offstage.

### Display blocking

The blocking displayed on the stage section can be changed by clicking on another blocking that you want to view.

### Change blocking order

Blocking order can be changed by dragging the items in blocking list over to where you want it to be. That blocking will be inserted to where you've moved it.

### Delete blocking

Blockings can be deleted by hovering over the blocking and click "Edit". There is a delete button to remove that blocking. If the deleted blocking was being viewed, the previous blocking will be viewd instead.

## Dancer

### Dancer list

Dancer list on the right is automatically sorted so that you can quickly find whether a dancer is present. You can click on a dancer's name to change their name, color and angle they are facing.

### Add dancer

A new dancer will be added as "New Dancer" and will appear on the top left of the stage. You can then drag the dancer to a new position and change their name and color. Dancers can currently only be moved 1 at a time.

Avoid colors that are too light as they might blend in with the white background of the stage.

### Rotate dancer

A dancer will face the audience (bottom of your screen) by default and this is considered 0 degrees. You can change this by clicking on a dancer's name in the dancer list. A form should pop up for you to change the dancer's angle. If you set the angle to be 69 degrees, the dancer will face 69 degrees clockwise from the 0 degree mark.

As you change the dancer's angle, the change is reflected in real time on the 2D stage. You will see the change take effect on the 3D stage once you render it again.

I've added feet in the 3D dancer model to differentiate between front and back. The front of a dancer has their feet protruding forward and the back doesn't. This is to help tell the difference between a 0-degree and a 180-degree angle.

### Multi-select and moving many dancers at once

This is a feature that I wanted to implement but unfortunately have not had the time to. This section will change once the feature is implemented.

## Share your project

You can share the project by clicking "Share Project" button. This will download a file into your device, which can then be shared to others. You can change the file name from "danceblockProject.json" to anything, but keep the extension ".json".

Others can view your project by uploading the project file onto Danceblocks through "Upload Project File" button.

I encourage you to download the project file for storage purposes as well. By right, your project will not be lost when you close your web browser. However, it might be wiped when you clear your browser storage or when you switch to a different browser. If you're working on a big project with many blockings, I suggest downloading it as a file regularly to prevent the loss of your effort.

