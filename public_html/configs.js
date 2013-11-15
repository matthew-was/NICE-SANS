/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    
    drawTable = function(configuration) {
        var table = document.getElementById('config_table');
        var rowNum = table.rows.length;
        if (rowNum !== 0){
            for( var i = 0; i<rowNum; i++) {
                table.deleteRow();
            }
        }
        var head = "<tr><td>Name</td><td>Wavelength</td><td>Wavelength Spread</td><td>Attenuator</td><td>Guides</td><td>Guide Aperture</td><td>Beam Stop</td><td>Beam Stop X Position</td><td>Beam Stop Y Position</td><td>Beam Center X Position</td><td>Beam Center Y Position</td><td>Detector Distance</td><td>Detector Offset</td></tr>";
        table.insertRow(0).innerHTML = head;
        for (var j=0; j<configuration.length; j++) {
            table.insertRow(j+1).innerHTML = setTable(configuration[j], j+1);
        }
    };
    
    setTable = function(object, rnum) {
        var start = "<tr>";
        var end = "</tr>";
        
        //Instrumental Mins and Maxes
        var wlMin = 3;
        var wlMax = 30;
        var detPosMin = 106;
        var detPosMax = 525;
        var detOffMin = 0;
        var detOffMax = 25;
        
        var name = "<td><input type='text' class='input' onchange=makeObject() value="+object.name+" /></td>";
        
        if (object.wavelength < wlMin) {
            object.wavelength = wlMin;
        }
        if (object.wavelength > wlMax) {
            object.wavelength = wlMax;
        }
        var wl = "<td><input type='number' class='input' onchange=makeObject() step=0.01 min="+wlMin+" max="+wlMax+"  value=" + object.wavelength + " /></td>";
        
        var wlS = "<td><select><option onchange=makeObject() value=0.100>0.100</option><option value=0.132 selected='selected'>0.132</option><option value=0.154>0.154</option><option value=0.250>0.250</option></select></td>";
        
        var att0 = "<option value=0>0</option>";
        var att1 = "<option value=1>1</option>";
        var att2 = "<option value=2>2</option>";
        var att3 = "<option value=3>3</option>";
        var att4 = "<option value=4>4</option>";
        var att5 = "<option value=5>5</option>";
        var att6 = "<option value=6>6</option>";
        var att7 = "<option value=7>7</option>";
        var att8 = "<option value=8>8</option>";
        var att9 = "<option value=9>9</option>";
        switch (object.attenuator) {
            case 0:
                att0 = "<option value=0 selected='selected'>0</option>";
                break
            case 1:
                att1 = "<option value=1 selected='selected'>1</option>";
                break
            case 2:
                att2 = "<option value=2 selected='selected'>2</option>";
                break
            case 3:
                att3 = "<option value=3 selected='selected'>3</option>";
                break
            case 4:
                att4 = "<option value=4 selected='selected'>4</option>";
                break
            case 5:
                att5 = "<option value=5 selected='selected'>5</option>";
                break
            case 6:
                att6 = "<option value=6 selected='selected'>6</option>";
                break
            case 7:
                att7 = "<option value=7 selected='selected'>7</option>";
                break
            case 8:
                att8 = "<option value=8 selected='selected'>8</option>";
                break
            case 9:
                att9 = "<option value=9 selected='selected'>9</option>";
                break
        }
        var att = "<td><select onchange=makeObject()>"+att0+att1+att2+att3+att4+att5+att6+att7+att8+att9+"</select></td>";

        var guide0 = "<option value=0>0</option>";
        var guide1 = "<option value=1>1</option>";
        var guide2 = "<option value=2>2</option>";
        switch (object.guides) {
            case 0:
                guide0 = "<option value=0 selected='selected'>0</option>";
                break
            case 1:
                guide1 = "<option value=1 selected='selected'>1</option>";
                break
            case 2:
                guide2 = "<option value=2 selected='selected'>2</option>";
                break
        }
        var guide = "<td><select onchange=redrawTable()>"+guide0+guide1+guide2+"</select></td>";

        switch (object.guides) {
            case 0:
                if (object.guideAperture === 25.0) {
                    guideAp = "<td><select onchange=makeObject()><option value='13.0'>13.0mm</option><option selected='selected' value='25.0'>25.0mm</option><option value='38.0'>38.0mm</option></select></td>";                    
                } else if (object.guideAperture === 38.0) {
                    guideAp = "<td><select onchange=makeObject()><option value='13.0'>13.0mm</option><option value='25.0'>25.0mm</option><option selected='selected' value='38.0'>38.0mm</option></select></td>";                    
                } else {
                    guideAp = "<td><select onchange=makeObject()><option selected='selected' value='13.0'>13.0mm</option><option value='25.0'>25.0mm</option><option value='38.0'>38.0mm</option></select></td>";                    
                }
                break
            default:
                guideAp = "<td><select onchange=makeObject()><option selected='selected' value='50.0'>50.0mm</option></select></td>";
                break
        }
        
        var bStop = "<td><select onchange=makeObject()><option value=1 selected='selected'>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option></select></td>";
        var bStopX = "<td><input type='number' step=0.01 class='input' onchange=makeObject() onchange=redrawTable() value=" + object.beamStopX + " /></td>";
        var bStopY = "<td><input type='number' step=0.01 class='input' onchange=makeObject() onchange=redrawTable() value=" + object.beamStopY + " /></td>";
        var bCentX = "<td><input type='text' step=0.01 class='input' onchange=makeObject() onchange=redrawTable() value=" + object.beamCenterX + " /></td>";
        var bCentY = "<td><input type='text' step=0.01 class='input' onchange=makeObject() onchange=redrawTable() value=" + object.beamCenterY + " /></td>";
        
        object.detectorPosition = Math.round(object.detectorPosition);
        if (object.detectorPosition < detPosMin) {
            object.detectorPosition = detPosMin;
        }
        if (object.detectorPosition > detPosMax) {
            object.detectorPosition = detPosMax;
        }
        var detPos = "<td><input type='number' class='input' onchange=makeObject() set=1 value=" + object.detectorPosition + " /></td>";
        
        object.detectorOffset = Math.round(object.detectorOffset);
        if (object.detectorOffset < detOffMin) {
            object.detectorOffset = detOffMin;
        }
        if (object.detectorOffset > detOffMax) {
            object.detectorOffset = detOffMax;
        }        
        var detOff = "<td><input type='text' class='input' onchange=makeObject() value=" + object.detectorOffset + " /></td></tr>";
        
        var align = "<input type='button' id='alignbtn' onclick=alignRow("+rnum+") value='Align' />";
        
        var rowNum = configurations.length;
        if (rowNum < 2) {
            var del = "";
        } else {
            var del = "<input type='button' id='delbtn' onclick=deleteRow("+rnum+") value='Delete'/>";
        }
        
        return start+name+wl+wlS+att+guide+guideAp+bStop+bStopX+bStopY+bCentX+bCentY+detPos+detOff+end+align+del;
    };
    
    makeObject = function() {
        var object = [];
        var table = document.getElementById('config_table');
        var rowNum = table.rows.length;
        for (i=1; i<rowNum; i++) {
            var obj = {};
            obj.name = table.rows[i].cells[0].firstChild.value,
            obj.wavelength = parseFloat(table.rows[i].cells[1].firstChild.value),
            obj.wavelengthSpread = parseFloat(table.rows[i].cells[2].firstChild.value),
            obj.attenuator = parseFloat(table.rows[i].cells[3].firstChild.value),
            obj.guides = parseFloat(table.rows[i].cells[4].firstChild.value);
            obj.guideAperture = parseFloat(table.rows[i].cells[5].firstChild.value);
            obj.beamStop = parseFloat(table.rows[i].cells[6].firstChild.value);
            obj.beamStopX = parseFloat(table.rows[i].cells[7].firstChild.value);
            obj.beamStopY = parseFloat(table.rows[i].cells[8].firstChild.value);
            obj.beamCenterX = parseFloat(table.rows[i].cells[9].firstChild.value);
            obj.beamCenterY = parseFloat(table.rows[i].cells[10].firstChild.value);
            obj.detectorPosition = parseFloat(table.rows[i].cells[11].firstChild.value);
            obj.detectorOffset = parseFloat(table.rows[i].cells[12].firstChild.value);
           object.push(obj);
        }
        configurations = object;
        localStorage.setItem('configurations', JSON.stringify(configurations));
        return object;
    };
    
    redrawTable = function() {
        var configs = makeObject();
        drawTable(configs);
    };
    
    deleteRow = function(n) {
        var table = document.getElementById('config_table');
        table.deleteRow(n);
        redrawTable();
    };
    
    alignRow = function(n) {
        localStorage.numb = n;
        localStorage.setItem('configurations', JSON.stringify(configurations));
        window.open("alignpanel.html");
    };
    
    alignTable = function(config) {
        var table=document.getElementById('alignTable');
        var tabRow0 = "<tr><td>Beam Stop X</td><td>Beam Stop Y</td></tr>";
        var tabRow1 = "";
        if (config.beamStopX < -10) {
            tabRow1 = "<tr><td><input type='text' onchange=getAlign() disabled=true value="+config.beamStopX+" /></td><td><input type='text' onchange=getAlign() value="+config.beamStopY+" /></td></tr>";
        } else {
            tabRow1 = "<tr><td><input type='text' onchange=getAlign() value="+config.beamStopX+" /></td><td><input type='text' onchange=getAlign() value="+config.beamStopY+" /></td></tr>";
        }
        var tabRow2 = "<tr><td>Beam Cneter X</td><td>Beam Center Y</td></tr>";
        var tabRow3 = "<tr><td><input type='text' onchange=getAlign() value="+config.beamCenterX+" /></td><td><input type='text' onchange=getAlign() value="+config.beamCenterY+" /></td></tr>";
        var tabRow4 = "<tr><td>Sample Position</td></tr>";
        var tabRow5 = "<tr><td><input type='text' onchange=getAlign() value = 0 /></td></tr>";
        table.insertRow(0).innerHTML = tabRow0;
        table.insertRow(1).innerHTML = tabRow1;
        table.insertRow(2).innerHTML = tabRow2;
        table.insertRow(3).innerHTML = tabRow3;
        table.insertRow(4).innerHTML = tabRow4;
        table.insertRow(5).innerHTML = tabRow5;
    };
    
    getAlign = function() {
        var newTable= document.getElementById('alignTable');
        var newconfig = JSON.parse(localStorage.configurations);
        var n = localStorage.numb - 1;
        newconfig[n].beamStopX = parseInt(newTable.rows[1].cells[0].firstChild.value);
        newconfig[n].beamStopY = parseInt(newTable.rows[1].cells[1].firstChild.value);
        newconfig[n].beamCenterX = parseInt(newTable.rows[3].cells[0].firstChild.value);
        newconfig[n].beamCenterY = parseInt(newTable.rows[3].cells[1].firstChild.value);
        localStorage.setItem('configurations', JSON.stringify(newconfig));
    };
        
});$;
