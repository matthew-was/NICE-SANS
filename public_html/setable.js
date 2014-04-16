
$(function () {
    
    drawTable = function () {
        
        var numSamps = 10;

        var numTable = document.getElementById('sampNum'),
            nRowNum = numTable.rows.length;
        if (nRowNum !== 0) {
            for (var i = 0; i < nRowNum; i += 1) {
                numTable.deleteRow();
            }
        }

        var tempTable = document.getElementById('sampTemp'),
            nRowNum = tempTable.rows.length;
        if (nRowNum !== 0) {
            for (var i = 0; i < nRowNum; i += 1) {
                tempTable.deleteRow();
            }
        }

        var magTable = document.getElementById('sampMag'),
            nRowNum = magTable.rows.length;
        if (nRowNum !== 0) {
            for (i = 0; i < nRowNum; i += 1) {
                magTable.deleteRow();
            }
        }

        var sTTable = document.getElementById('sampTimes'),
            tRowNum = sTTable.rows.length;
        if (tRowNum !== 0) {
            for (var i = 0; i < tRowNum; i += 1) {
                sTTable.deleteRow();
            }
        }

        var sNRow0 = "<tr><th>Line</th></tr>",
            sTRow0 = "<tr><th>Temperature (°C)</th></tr>",
            sMRow0 = "<tr><th>Magnetic Field (T) </th></tr>",
            sDRow0 = "<tr><td id='row1'>1.1m5</td><td>1.1m5t</td><td>5m5</td><td>5m5t</td><td>5m14</td><td>5m14t</td></tr>";
        numTable.insertRow(0).innerHTML = sNRow0;
        tempTable.insertRow(0).innerHTML = sTRow0;
        magTable.insertRow(0).innerHTML = sMRow0;
        sTTable.insertRow(0).innerHTML = sDRow0;

        for ( var i = 0; i < numSamps; i += 1) {
            var j = i + 1,
                sNRowN = "<tr><td class='sCol1'>" + j + "</td></tr>",
                sTRowN = "<tr><td ><input type=text class='tbox tbox1' value=0 /></td></tr>",
                sMRowN = "<tr><td ><input type=text class='tbox tbox2' value=0 /></td></tr>",
                sDRowN = "<tr><td class='tcol3'><input type=text class='tbox tbox3' value=0 /></td><td class='tcol4'><input type=checkbox class='cbox tbox4'/></td><td class='tcol5'><input type=text class='tbox tbox5' value=0 /></td><td class='tcol6'><input type=checkbox class='cbox tbox6'/></td><td class='tcol7'><input type=text class='tbox tbox7' value=0 /></td><td class='tcol8'><input type=checkbox class='cbox tbox8'/></td></tr>";
            
            numTable.insertRow(j).innerHTML = sNRowN;
            tempTable.insertRow(j).innerHTML = sTRowN;
            magTable.insertRow(j).innerHTML = sMRowN;
            sTTable.insertRow(j).innerHTML = sDRowN;
        }

        var sDButtonRow = "<tr><td class='tbCol3'><input type=button class='hbtn3' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol4'><input type=button class='hbtn4' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol5'><input type=button class='hbtn5' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol6'><input type=button class='hbtn6' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol7'><input type=button class='hbtn7' value='Hide' onclick=hideButton(this.className) /></td><td class='tbCol8'><input type=button class='hbtn8' value='Hide' onclick=hideButton(this.className) /></td></tr>";
        sTTable.insertRow(numSamps + 1).innerHTML = sDButtonRow;
    };
    
    addLine = function () {
        var tRows = document.getElementById('sampNum'),
            nRows = tRows.rows.length,
            numTable = document.getElementById('sampNum'),
            tempTable = document.getElementById('sampTemp'),
            magTable = document.getElementById('sampMag'),
            sTTable = document.getElementById('sampTimes'),
            sNRowN = "<tr><td class='sCol1'>" + nRows + "</td></tr>",
            sTRowN = "<tr><td ><input type=text class='tbox tbox1' value=0 /></td></tr>",
            sMRowN = "<tr><td ><input type=text class='tbox tbox2' value=0 /></td></tr>",
            sDRowN = "<tr><td class='tcol3'><input type=text class='tbox tbox3' value=0 /></td><td class='tcol4'><input type=checkbox class='cbox tbox4'/></td><td class='tcol5'><input type=text class='tbox tbox5' value=0 /></td><td class='tcol6'><input type=checkbox class='cbox tbox6'/></td><td class='tcol7'><input type=text class='tbox tbox7' value=0 /></td><td class='tcol8'><input type=checkbox class='cbox tbox8'/></td></tr>";

        numTable.insertRow(nRows).innerHTML = sNRowN;
        tempTable.insertRow(nRows).innerHTML = sTRowN;
        magTable.insertRow(nRows).innerHTML = sMRowN;
        sTTable.insertRow(nRows).innerHTML = sDRowN;
        
        removeButton();
        
    };
    
    delLine = function () {
        var tRows = document.getElementById('sampNum'),
            nRows = tRows.rows.length,
            numTable = document.getElementById('sampNum'),
            tempTable = document.getElementById('sampTemp'),
            magTable = document.getElementById('sampMag'),
            sTTable = document.getElementById('sampTimes'),
            dRows = nRows -1;
        
        numTable.deleteRow(dRows);
        tempTable.deleteRow(dRows);
        magTable.deleteRow(dRows);
        sTTable.deleteRow(dRows);
        
        removeButton()
    };

    hideButton = function(btnNum) {
        var hval = document.getElementsByClassName(btnNum),
            num = btnNum.charAt(4),
            hstring = "tbox"+num,
            hboxes = document.getElementsByClassName(hstring),
            hbool = true;
            hret = "Show";
        
        if (hval[0].value == "Hide") {
            hbool = true;
            hret = "Show";
        } else {
            hbool = false;
            hret = "Hide";
        }
        
        for (var i = 0; i < hboxes.length; i += 1) {
            hboxes[i].hidden = hbool;
            hval[0].value = hret;
        };
    };
    
    removeButton = function() {
        var rowNums = document.getElementById('sampNum'),
            btn = document.getElementById('del');
        
        if (rowNums.rows.length <= 2) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        };
    }
    
});
