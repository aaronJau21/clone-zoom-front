import { http } from "../../api/http";
import { CodeZoomResponse } from "../interfaces/CodeZoomResponse";

export class HomeService {
    static async createZoo(code: string): Promise<CodeZoomResponse> {
        const { data } = await http.post<CodeZoomResponse>('/room', { code })

        return data;
    }
}