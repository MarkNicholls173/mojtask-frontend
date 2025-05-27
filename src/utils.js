export function DateFormatter(DateString) {
    var mydate = new Date(DateString);
    return mydate.toDateString();
}