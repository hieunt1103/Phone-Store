import User from '../../model/UserModel.js';
const GetDetailsUser = async (id_user) => {
    try {
        const user = await User.findOne({ where: { id_user: id_user } });
        if (!user) {
            return {
                status: 'ERR',
                message: 'User not found',
            };
        }
        return {
            status: 'OK',
            message: 'User found',
            data: user,
        };
    } catch (e) {
        throw new Error(e.message);
    }
};
export { GetDetailsUser };
