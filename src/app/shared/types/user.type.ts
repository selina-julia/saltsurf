export type User = {
    uid?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    favoriteItems?: string[];
    checkOutItems?: string[];
};
