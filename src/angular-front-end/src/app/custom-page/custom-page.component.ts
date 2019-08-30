import { Component, OnInit } from '@angular/core';
import { rowService } from './custom-page.service';

@Component({
    selector: 'custom-page',
    templateUrl: './custom-page.component.html'
  })
export class CustomPageComponent implements OnInit {
    title: string;
    private rows;
    constructor(private _rowServ: rowService) {
        this.title = 'Conspectus preproject sample';
    }

    ngOnInit(){
        this._rowServ.getRows().subscribe(
            data => {
                this.rows=data['data'];
            },
            err => console.error(err),
            () => console.log('data getted')
        );
    }
    addNewRow(name, data){
        this._rowServ.addRow(name, data);
        return false;
    }
    delRow(delIndex){
        this._rowServ.deleteRow(delIndex);
    }
}
