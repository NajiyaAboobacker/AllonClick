export abstract class ServiceBase{
    static API_URL = "https://fakestoreapi.com";
   // static API_URL = "https://api.escuelajs.co/api/v1";
    //static API_URL = "https://fakestoreapi.in/api";
    static getUrl(path:string){
        return `${this.API_URL}${path}`
    }
}