import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-furniture',
  templateUrl: './show-furniture.component.html',
  styleUrls: ['./show-furniture.component.css']
})
export class ShowFurnitureComponent {
  constructor(private service: ApiserviceService) { }
  FurnitureList: any = [];
  ModalTitle = "";
  ActivateAddEditEmpComp: boolean = false;
  furn: any;

  ngOnInit(): void {

    this.refreshEmpList();
    console.log(this.FurnitureList);

  }

  addClick() {
    this.furn = {
      FurnitureId: "0",
      FurnitureName: "",
      Cost: "",
      Brand: "",
      FurnitureType: ""
    }
    this.ModalTitle = "Add Furniture";
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.furn = item;
    this.ModalTitle = "Edit Furniture";
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteFurniture(item.FurnitureId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getFurnitureList().subscribe(data => {
      this.FurnitureList = data;
      console.log(data);

    });
  }
}