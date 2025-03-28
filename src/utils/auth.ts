import bcrypt from 'bcrypt';

export const hashPassword = async (pasword: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pasword,salt);  
}