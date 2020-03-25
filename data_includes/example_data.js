// We only generate trials labeled 'rating' so far (from the Label column)
var shuffleSequence = seq("rating");
PennController.ResetPrefix(null);

// PennController.FeedItems automatically creates the 'items' variable for you
PennController.FeedItems(
    // 'row' will successively point to each row of the table (feel free to use another name)
    row => PennController(
        // row.Sentence will iteratively take the value of the column 'Sentence' for each row
        newText( "green" , row.Sentence )
        ,
        newScale("judgment",    "cold", "cool", "lukewarm", "warm", "hot")
            .settings.labels("top")
            .settings.before( getText("green") )
            .settings.size("auto")
            .print()
            .wait()   
    )
);
