export interface IJsonPlaceHolderServicies {
  ObtenerPosts(): Promise<any>;
  CrearPosts(data: any): Promise<any>;
}
