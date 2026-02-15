(function(input) {
    const SN = "your_device_sn"; // Replace with e.g. "HOA3GAG9F965874"
    
    var propName = (typeof property !== 'undefined') ? property : "unknown";
    
    var value = parseInt(input);
    if (isNaN(value)) value = 0;

    // Construct the string manually to ensure exact spacing
    var output = '{"sn": "' + SN + '", "properties": { "' + propName + '": ' + value + ' }}';
    
    // console.log("ZENDURE DEBUG: Sending JSON -> " + output);
    
    return output;
})(input)
