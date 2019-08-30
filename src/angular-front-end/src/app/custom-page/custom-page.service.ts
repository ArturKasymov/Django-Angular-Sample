import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class rowService {

    constructor(private http: HttpClient) {
    }

    rows:any[] = [
    {key: "name1", value: "data1"},
    {key: "name2", value: "data2"},
    {key: "name3", value: "data3"},
    ];

    getRows(){
        return this.http.get('/api/custom_page/table/');
    }

    // write appropriate http requests to delete or add a row in DB
    addRow(key, value){
        let newRow = {key: key, value: value};
        //this.rows.push(newRow);
        console.log(newRow);
        this.http.post('/api/custom_page/table/',newRow, this.getHttpOptions()).toPromise()
        .then(res => console.log(res))
        .catch(err => console.log(err));
        console.log("added");
        return false;
    }
    deleteRow(delIndex){
        this.rows.splice(delIndex, 1);
        return false;
    }

    getHttpOptions() {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
}
