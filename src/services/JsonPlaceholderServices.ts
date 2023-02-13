import { IJsonPlaceHolderServicies } from "./types";
import { JPApi } from "./JsonPlaceHolderAPI";

export class JsonPlaceHolderServices implements IJsonPlaceHolderServicies {
  ObtenerPosts(): Promise<any> {
    const promesa = new Promise<any>((resolve, reject) => {
      JPApi.get("/posts")
        .then((res: any) => {
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
    return promesa;
  }
  CrearPosts(data: any): Promise<any> {
    const promesa = new Promise<any>((resolve, reject) => {
      JPApi.post("/posts", data)
        .then((res: any) => {
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
    return promesa;
  }
}

const JsonPlaceHolder = new JsonPlaceHolderServices();
export default JsonPlaceHolder;
