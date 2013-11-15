
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
        
        var sNTable = document.getElementById('sampNames');
        var nRowNum = sNTable.rows.length;
        if (nRowNum !== 0){
            for( var i = 0; i<nRowNum; i++) {
                sNTable.deleteRow();
            }
        }

        var sDTable = document.getElementById('sampDetail');
        var dRowNum = sDTable.rows.length;
        if (dRowNum !== 0){
            for( var i = 0; i<dRowNum; i++) {
                sDTable.deleteRow();
            }
        }

        var sTTable = document.getElementById('sampTimes');
        var tRowNum = sTTable.rows.length;
        if (tRowNum !== 0){
            for( var i = 0; i<tRowNum; i++) {
                sTTable.deleteRow();
            }
        }

        //name, description, thickness, mass
        // don't forget sample aperture.
        
        var sNRow0 = "<tr><th colspan=2>Sample</th></tr>";
        var sNRow1 = "<tr><td id='row1' class='col1'></td><td class='col2'>Name</td></tr>";
        var sNRow2 = "<tr></tr>";
        var sDRow0 = "<tr><th colspan=3>Details</th></tr>";
        var sDRow1 = "<tr><td id='row1' class='col3'>Thickness (mm)</td><td class='col4'>Description</td><td class='col5'>Mass (g)</td></tr>";
        var sDRow2 = "<tr></tr>";
        var sTRow0 = "<tr><th colspan=6>Times</th></tr>";
        var sTRow1 = "<tr><td id='row2' colspan=2>1.1m5</td><td colspan=2>5m5</td><td colspan=2>5m14</td></tr>";
        var sTRow2 = "<tr><td id='row2'>Scatt</td><td>Trans</td><td id='row2'>Scatt</td><td>Trans</td><td id='row2'>Scatt</td><td>Trans</td></tr>";
        sNTable.insertRow(0).innerHTML = sNRow0;
        sNTable.insertRow(1).innerHTML = sNRow1;
        sNTable.insertRow(2).innerHTML = sNRow2;
        sDTable.insertRow(0).innerHTML = sDRow0;
        sDTable.insertRow(1).innerHTML = sDRow1;
        sDTable.insertRow(2).innerHTML = sDRow2;
        sTTable.insertRow(0).innerHTML = sTRow0;
        sTTable.insertRow(1).innerHTML = sTRow1;
        sTTable.insertRow(2).innerHTML = sTRow2;
        
        for (var i=0; i<numSamps; i++) {
            var j = i+1;
            
            var sNRowN = "<tr><td class='sCol1'>"+j+"</td><td class='sCol2'><input type=text class='sic2' /></td></tr>";
            var sDRowN = "<tr><td class='dCol3'><input type=text class='dic3' value=1 /></td><td class='dCol4'><input type=text class='dic4'/></td><td class='dCol5'><input type=text class='dic5'/></td></tr>";
            var sTRowN = "<tr><td><input type=text class='tbox' value=0 /></td><td><input type=text class='tbox' value=0 /></td><td><input type=text class='tbox' value=0 /></td><td><input type=text class='tbox' value=0 /></td><td><input type=text class='tbox' value=0 /></td><td><input type=text class='tbox' value=0 /></td></tr>";
            sNTable.insertRow(j+2).innerHTML = sNRowN;
            sDTable.insertRow(j+2).innerHTML = sDRowN;
            sTTable.insertRow(j+2).innerHTML = sTRowN;
        }
    };
    
});
