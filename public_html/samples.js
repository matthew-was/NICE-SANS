
$( function() {
    
    drawTable = function() {
        var option = document.getElementById('changer');
        var optTxt = option.options[option.selectedIndex].text;
        
        var numSamps;
        if (optTxt === "10CB") {
            numSamps = 10;
        } else if (optTxt === "9P") {
            numSamps = 9;            
        } else if (optTxt === "7HB") {
            numSamps = 7;            
        };
        
        var table = document.getElementById('sampTable');
        var rowNum = table.rows.length;
        if (rowNum !== 0){
            for( var i = 0; i<rowNum; i++) {
                table.deleteRow();
            }
        }
        
        //name, description, thickness, mass
        // don't forget sample aperture.
        
        var tabRow0 = "<tr><th colspan=5>Sample</th></tr>";
        var tabRow1 = "<tr><td class='col1' style='width:200px'></td><td class='col2'>Name</td><td class='col3'>Thickness</td><td class='col4'>Description</td><td class='col5'>Mass</td></tr>";
        table.insertRow(0).innerHTML = tabRow0;
        table.insertRow(1).innerHTML = tabRow1;
        
        for (var i=0; i<numSamps; i++) {
            var j = i+1;
            
            var tabRowN = "<tr><td class='col1'>"+j+"</td><td class='col2'><input type=text id=ic2 /></td><td class='col3'><input type=text id=ic3/></td><td class='col4'><input type=text class=ic4/></td><td class='col5'><input type=text clasee=ic5/></td></tr>";
            table.insertRow(j+1).innerHTML = tabRowN;
        }
    };
    
});
