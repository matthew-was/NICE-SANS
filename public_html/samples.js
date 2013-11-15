
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
        console.log(numSamps);
        
        var table = document.getElementById('config_table');
        var rowNum = table.rows.length;
        if (rowNum !== 0){
            for( var i = 0; i<rowNum; i++) {
                table.deleteRow();
            }
        }
        
        //name, description, thickness, mass
        // don't forget sample aperture.
        
        var tabRow1 = "<tr><td></td><td>Sample Name</td><td>Sample thickness</td><td>Sample Description</td><td>Sample Mass</td></tr>";
    };
    
});
