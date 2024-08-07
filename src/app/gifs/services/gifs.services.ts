import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchResponse } from "../interfaces/gifs.interface";

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _tagsHistory: string[] = [];
    private apiKey:       string = 'EPwSZM5e0ttBZoi6FYTEvJdxJpwRkjyq';
    private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

    public gifsList: Gif[] = [];

    constructor(
        private http: HttpClient
    ){
        this.loadLocalStorage();
    }


    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string){
        tag = tag.toLowerCase();

        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter(tagFilter => tagFilter != tag)
        }
        this._tagsHistory.unshift(tag);

        this._tagsHistory = this._tagsHistory.splice(0, 10);
        this.saveLocalStorage();
    }

    private saveLocalStorage():void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage() {
        if(!localStorage.getItem('history')) return;
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    }


    async searchTag(tag: string): Promise<void> {
        if( tag.length == 0) return;

        
        this.organizeHistory(tag);

        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag)


        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params: params})
        .subscribe( resp => {
            console.log(resp.data);
            this.gifsList = resp.data;
            console.log({gifs: this.gifsList});
        })

    }

}