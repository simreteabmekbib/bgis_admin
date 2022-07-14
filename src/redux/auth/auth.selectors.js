import { createSelector } from 'reselect';

const selectAuth = state => state.auth;


export const selectUserExists = createSelector(
    [selectAuth],
    auth => auth.userExists
);

export const selectUserHasPassword = createSelector(
    [selectAuth],
    auth => auth.userHasPassword
);

export const selectUserExistChecked = createSelector(
    [selectAuth],
    auth => auth.userExistChecked
);

export const selectUserPhone = createSelector(
    [selectAuth],
    auth => auth.phoneNumber
);
export const selectUserId = createSelector(
    [selectAuth],
    auth => auth.userId
);

export const selectAccountActivated = createSelector(
    [selectAuth],
    auth => auth.accountActivated
);


export const selectUserCode = createSelector(
    [selectAuth],
    auth => auth.authCode
);

export const selectUserAuthenticated = createSelector(
    [selectAuth],
    auth => !(auth.refreshToken === null || auth.accessToken === null)
);

export const selectAccessToken = createSelector(
    [selectAuth],
    auth => auth.accessToken
);

export const selectAuthLoading = createSelector(
    [selectAuth],
    auth => auth.authLoading
);

export const selectAuthError = createSelector(
    [selectAuth],
    auth => auth.authError
)

export const selectUserRoles = createSelector(
    [selectAuth],
    auth => auth.userRoles
)

export const selectUserPermissions = createSelector(
    [selectAuth],
    auth => auth.userPermissions
)

export const selectUserBranch = createSelector(
    [selectAuth],
    auth => auth.userBranch
)
export const selectUserDateOfBirth = createSelector(
    [selectAuth],
    auth => auth.userDateOfBirth
)
export const selectUserGender = createSelector(
    [selectAuth],
    auth => auth.userGender
)
export const selectUserNationality = createSelector(
    [selectAuth],
    auth => auth.userNationality
)
export const selectUserExpectedGradeLevel = createSelector(
    [selectAuth],
    auth => auth.userExpectedGradeLevel
)


