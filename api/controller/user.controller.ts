import got from 'got';
import { URLSearchParams } from 'url';

class UserController {
    async getById(id: number | string) {
        const response = await got(`https://social-network.samuraijs.com/api/1.0/users/${id}`)
        return JSON.parse(response.body)

    }
}

export const user = new UserController();