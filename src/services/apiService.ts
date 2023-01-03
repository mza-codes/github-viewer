import axios from "axios";

export const fetchRepos = async (username: string) => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        console.warn(data);
        setTimeout(() => {
            return data;
        }, 17000);
    } catch (err: any) {
        console.warn(err);
        return err;
    };
};