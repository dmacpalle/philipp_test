    PennController.Sequence( randomize("picture") , randomize("rating") );
    PennController.ResetPrefix(null);
    PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");
    PennController.Template( PennController.defaultTable.filter("Type","rating") ,
        row => PennController( "rating" ,
            newText( "sentence" , row.Sentence )
            ,
            newScale("judgment",    "cold", "cool", "lukewarm", "warm", "hot")
                .settings.log()             // Record
                .settings.labelsPosition("top")
                .settings.before( getText("sentence") )
                .settings.size("auto")
                .print()
                .wait()
        )
    );
    PennController.Template( PennController.defaultTable.filter("Type","picture") ,
        row => PennController( "picture" ,
            defaultImage
                .settings.size(200, 200)
            ,
            newText("test sentence", row.Sentence)
                .print()
            ,
            newCanvas("patches", 500, 200)
                .settings.add(   0, 0, newImage("color1", row.Color1) )
                .settings.add( 300, 0, newImage("color2", row.Color2) )
                .print()
            ,
            newSelector("patch")
                .settings.log()             // Record
                .settings.add( getImage("color1") , getImage("color2") )
                .wait()
        )
    );
