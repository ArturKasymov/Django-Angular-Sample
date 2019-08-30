// this array should be loaded from DB

export class rowService {
  //array from DB
    rows:any[] = [
    {name: "name1", data: "data1"},
    {name: "name2", data: "data2"},
    {name: "name3", data: "data3"},
    ];

    getRows(){
        //this.dataSource.subscribe(data => {this.rows = data});
        return this.rows;
    }

    // write appropriate http requests to delete or add a row in DB
    addRow(name, data){
        let newRow = {name: name, data: data};
        this.rows.push(newRow);
        return false;
    }
    deleteRow(delIndex){
        this.rows.splice(delIndex, 1);
        return false;
    }
}
