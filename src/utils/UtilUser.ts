export interface User {
    first_name: string,
    second_name: string,
    last_name: string,
}

// 'Петров Иван';
const getShortName = (user: User) => {
    return `${user.first_name} ${user.second_name}`;
};
// 'Петров Иван Отчествович';
const getFullName = (user: User) => {
    return `${user.first_name} ${user.second_name} ${user.last_name}`;
};
// 'Петров И. П.';
const getInitialFullName = (user: User) => {
    const shortSecondName = `${user.second_name[0]}.`;
    const shortLastName = `${user.last_name[0]}.`;

    return `${user.first_name} ${shortSecondName} ${shortLastName}`;
};

const UtilUser = {
    getShortName,
    getFullName,
    getInitialFullName,
};

export default UtilUser;
