import User from '../../model/UserModel.js';

const ListUsers = async () => {
    try {
        const users = await User.findAll();
        return {
            status: 'Success',
            message: 'Found users',
            data: users,
        };
    } catch (error) {
        return {
            status: 'Failed',
            message: 'User not found' + error.message,
        };
    }
};

export { ListUsers };
