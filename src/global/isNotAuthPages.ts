export const checkIsNotAuthPages = (path: string) => {
    const isNotLoginPage = path !== '/login'
    const isNotSigninPage = path !== '/signin'
    const isNotVerificationPage = path !== '/signin/verification';
    const isNotAuthPages = isNotLoginPage && isNotSigninPage && isNotVerificationPage;

    return isNotAuthPages
} 