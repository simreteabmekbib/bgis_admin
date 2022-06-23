export const admin_permission = {
    MANAGE_ADMINS : "ManageAdmins",
    VIEW_ITEMS : "ViewItems"
};

export const teacher_permission = {

}

export const student_permission = {

}

export const parent_permission = {

}

export const Roles = {
    ADMIN : "admin",
    TEACHER : "teacher"
}

export const Rules = {
    [Roles.ADMIN]: {
        [admin_permission.MANAGE_ADMINS]: true
    }
}