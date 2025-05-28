export function DateFormatter(DateString) {
    try {
        var mydate = new Date(DateString);
        
    } catch (err) {
        return "Invalid Date";
    }
    return mydate.toDateString();
}