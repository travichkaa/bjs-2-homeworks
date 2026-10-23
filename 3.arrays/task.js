function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every( (element, index) => element === arr2[index] );
}

function getUsersNamesInAgeRange(users, gender) {
    const filtered = users.filter(user => user.gender === gender);
    if (filtered.length === 0) return 0;
    return filtered.reduce((acc, user) => acc + user.age, 0) / filtered.length;
}