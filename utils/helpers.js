module.exports = {
    format_time: (datecreated) => {
        return datecreated.toLocaleTimeString();
    },
    format_date: (datecreated) => {
        return `${new Date(datecreated).getMonth() + 1}/${new Date(datecreated).getDate()}/${new Date(datecreated).getFullYear()}`;
    },
};