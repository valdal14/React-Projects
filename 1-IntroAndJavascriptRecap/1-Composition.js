// COMPOSITION EXAMPLE
// Composition occurs when simple functions are combined together to create more complex functions.

function getProfileLink (username) {
    return 'https://github.com/' + username
}

function getProfilePic (username) {
    return 'https://github.com/' + username + '.png?size=200'
}

function getProfileData (username) {
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
}

// React & Composition

// Example:

//<Page>
// <Article />
// <Sidebar />
//</Page>
