let date = document.querySelector("#date");
let age = document.querySelector("#age");

date.addEventListener("click", () => {
    let bday = new Date(date.value);

    let day = bday.getDate();
    let month = bday.getMonth() + 1;
    let year = bday.getFullYear();

    let today = new Date();

    let tday = today.getDate();
    let tmonth = today.getMonth() + 1;
    let tyear = today.getFullYear();

    let d, m, y;

    y = tyear - year;
    if (tmonth >= month) {
        m = tmonth - month;
    }
    else {
        y--;
        m = 12 + tmonth - month;
    }

    if (tday >= day) {
        d = tday - day;
    }
    else {
        m--;
        d = getDaysInMonth(year, month) + tday - day;
    }
    if (m < 0) {
        m = 11;
        y--;
    }
    console.log(y, m, d);
    age.innerText = `YOU ARE ${y} YEARS , ${m} MONTHS AND ${d} DAYS OLD`;

});

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}