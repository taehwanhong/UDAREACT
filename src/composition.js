function getProfileLink(username) {
    return 'http://github.com/' + username
}

function getProfilePic(username) {
    return 'http://github.com/' + username + '.png?size=200'
}

function getProfileData(username) {
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
}

// ------------------------- upper code is same as below
// but DOT (Do one thing) so, upper code is better than below

function getProfileData(username) {
    return {
        pic: 'https://github.com/' + username + '.png?size=200',
        link: 'https://github.com/' + username
    }
}

//------------------