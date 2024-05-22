import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateAccessToken = async (payload) => {
    const access_token = jwt.sign(
        {
            payload,
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: '30m' },
    );
    return access_token;
};
const generateRefreshToken = async (payload) => {
    const refresh_token = jwt.sign(
        {
            payload,
        },
        process.env.REFRESH_TOKEN,
        { expiresIn: '365d' },
    );
    return refresh_token;
};
const refreshTokenJwtService = (authorization) => {
    return new Promise((resolve, reject) => {
        try{
                jwt.verify(authorization,process.env.REFRESH_TOKEN,async(err,user) => {
                    if (err) {
                        resolve({
                            status: 'ERR',
                            message: 'The authemtication'
                        })
                    }
                    const access_token = await generateAccessToken({
                    id_user: user?.id_user,
                    isAdmin: user?.isAdmin
                })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    access_token
                })
            
                })
                
                
        }catch (e) {
            reject(e)
        }
    })
}
export { generateAccessToken, generateRefreshToken,refreshTokenJwtService };
