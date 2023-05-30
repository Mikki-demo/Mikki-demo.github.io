window.onload= function isLogin() {
    const isLogin = localStorage.getItem('isLogin')
    if (!isLogin) {
        window.location.href = '../loadin.html'
    }
}