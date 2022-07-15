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

export const selectBranchName = createSelector(
    [selectAuth],
    auth => auth.branchName
)
export const selectDateOfBirth = createSelector(
    [selectAuth],
    auth => auth.dateOfBirth
)
export const selectGender = createSelector(
    [selectAuth],
    auth => auth.gender
)
export const selectNationality = createSelector(
    [selectAuth],
    auth => auth.nationality
)
export const selectExpectedGradeLevel = createSelector(
    [selectAuth],
    auth => auth.expectedGradeLevel
)
export const selectPhoneNumber = createSelector(
    [selectAuth],
    auth => auth.phoneNumber
)
export const selectAlternatePhoneNumber = createSelector(
    [selectAuth],
    auth => auth.alternatePhoneNumber
)
export const selectSubCity = createSelector(
    [selectAuth],
    auth => auth.subCity
)
export const selectWoreda = createSelector(
    [selectAuth],
    auth => auth.woreda
)
export const selectHouseNumber = createSelector(
    [selectAuth],
    auth => auth.houseNumber
)


