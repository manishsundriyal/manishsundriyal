const getDateDESCSort = list => {
    const cloneList = [...list];
    return cloneList.sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        if (date1 > date2) {
            return -1;
        }
        if (date1 < date2) {
            return 1;
        }
        return 0;
    });
}

const getDateASCSort = list => {
    const cloneList = [...list];
    return cloneList.sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        if (date1 > date2) {
            return 1;
        }
        if (date1 < date2) {
            return -1;
        }
        return 0;
    });
}

export { getDateDESCSort, getDateASCSort }