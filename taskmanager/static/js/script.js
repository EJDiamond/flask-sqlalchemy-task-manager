document.addEventListener('DOMContentLoaded', function () {
    //sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);


    //date picker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {
            done: "Select"
        }
    });

    //select initialization
    let selects = document.querySelectorAll("Select");
    M.FormSelect.init(selects);
});