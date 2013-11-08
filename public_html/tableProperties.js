/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    
    setTable = function(object) {
        var start = "<tr>";
        var end = "</tr>";
        var name = "<td><input type='text' class='input' value="+object.name+" /></td>";
        var wl = "<td><input type='text' class='input' value=" + object.wavelength + " /></td>";
        var wlS = "<td><input type='text' class='input' value=" + object.wavelengthSpread + " /></td>";
        var att = "<td><input type='text' class='input' value=" + object.attenuator + " /></td>";
        var guide = "<td><input type='text' class='input' value=" + object.guides + " /></td>";
        var guideAp = "<td><input type='text' class='input' value=" + object.guideAperture + " /></td>";
        var sampAp = "<td><input type='text' class='input' value=" + object.sampleAperture + " /></td>";
        var bStop = "<td><input type='text' class='input' value=" + object.beamStop + " /></td>";
        var bStopX = "<td><input type='text' class='input' value=" + object.beamStopX + " /></td>";
        var bStopY = "<td><input type='text' class='input' value=" + object.beamStopY + " /></td>";
        var bCentX = "<td><input type='text' class='input' value=" + object.beamCenterX + " /></td>";
        var bCentY = "<td><input type='text' class='input' value=" + object.beamCenterY + " /></td>";
        var detPos = "<td><input type='text' class='input' value=" + object.detectorPosition + " /></td>";
        var detOff = "<td><input type='text' class='input' value=" + object.detectorOffset + " /></td></tr>";
        return start+name+wl+wlS+att+guide+guideAp+sampAp+bStop+bStopX+bStopY+bCentX+bCentY+detPos+detOff+end;
    };
    
});
