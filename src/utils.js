export const getDisplayDate = (date) => {
    const today = new Date();
    const compDate = new Date(date);

    const diff = today.getTime() - compDate.getTime();
    const hh = ('0' + compDate.getHours()).slice(-2);
    const mm = ('0' + compDate.getMinutes()).slice(-2);

    if (compDate.toDateString() === today.toDateString()) {
        return `Today, ${hh}:${mm}`;
    } else if (diff <= 24 * 60 * 60 * 1000) {
        return `Yesterday, ${hh}:${mm}`;
    } else {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${compDate.getDate()} ${months[compDate.getMonth()]}, ${hh}:${mm}`;
    }
};

export const getDisplayAmount = (transaction = {}) => {
    return `${!transaction.ignoreSign ? `${transaction.amount < 0 ? '-' : '+'} ` : ''}${transaction.currency} ${Math.abs(transaction.amount)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};
