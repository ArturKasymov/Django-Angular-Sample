import { Component, OnInit } from '@angular/core';
import { rowService } from './custom-page.service';

@Component({
    selector: 'custom-page',
    templateUrl: './custom-page.component.html'
  })
export class CustomPageComponent implements OnInit {
    title: string;
    rows:any[];
    constructor(private rowServ: rowService) {
        this.title = 'Conspectus preproject sample';
        this.rows = [];
    }

    ngOnInit(){
        this.rows = this.rowServ.getRows();
    }
    addNewRow(name, data){
        this.rowServ.addRow(name, data);
        return false;
    }
    delRow(delIndex){
        this.rowServ.deleteRow(delIndex);
    }
}
