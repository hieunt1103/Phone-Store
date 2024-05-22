import User from '../../model/UserModel.js';
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken } from '../JwtService.js';

const LoginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin;
        try {
            // Tìm kiếm người dùng dựa trên email
            const user = await User.findOne({ where: { email } });

            if (!user) {
                resolve({
                    status: 'ERR',
                    message: 'User not found',
                });
                return; 
            }

            // So sánh mật khẩu
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (!passwordMatch) {
                resolve({
                    status: 'ERR',
                    message: 'Incorrect password',
                });
                return; 
            }

            // Tạo AccessToken và RefreshToken với thông tin của người dùng
            const accessTokenPayload = {
                userId: user.id_user,
                isAdmin: user.isAdmin 
            };
            const refreshTokenPayload = {
                userId: user.id_user,
                isAdmin: user.isAdmin 
            };

            const accessToken =  await generateAccessToken(accessTokenPayload);
            const refreshToken =  await generateRefreshToken(refreshTokenPayload);

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token: accessToken,
                refresh_token: refreshToken,
            });
        } catch (error) {
            reject(error); 
        }
    });
};

export { LoginUser }; 
