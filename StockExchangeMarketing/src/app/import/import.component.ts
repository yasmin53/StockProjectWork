import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadService } from '../upload.service';
import bsCustomFileInput from "bs-custom-file-input";
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  importdataForm : FormGroup;
  constructor(private uploadService: UploadService) { }
  file : File;
  isError: boolean = false;
  errorMessage: String = "";
  ngOnInit() {
    bsCustomFileInput.init();
    // this.importdataForm = new FormGroup({
    //    excelfile: new FormControl("",[Validators.required])
    // });
  }
onFileChange(e){
  this.file = e.target.files[0];
}
uploadData(){
  const uploadSheetData=new FormData();
  uploadSheetData.append("stocksSheet",this.file,this.file.name);
  this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(
    data=>{
      console.log("uploaded");
    }
  );
}
// uploadData(){
//   const uploadSheetData = new FormData();
//   uploadSheetData.append("stocksSheet", this.file, this.file.name);
// }
  // importData(){ 
  //    const uploadSheetData = new FormData();
  //   uploadSheetData.append("stocksSheet", this.file, this.file.name);
  //   this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(data => {
  //     console.log("uploaded");
  //   });
  // }
}











