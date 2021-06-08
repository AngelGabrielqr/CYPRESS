import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FileModel } from 'src/commons/models/file.model';
import { UploadPresenter } from './upload.presenter';

@Component({
  selector: 'app-upload-ui',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [ 
    UploadPresenter
  ]
})
export class UploadComponent {
  public fileModel: FileModel = new FileModel();
  public text: string;
  public error: boolean = false;
  private allowedExtension: RegExp = /(.txt)$/i;
  @ViewChild('fileInput') fileInput: ElementRef;

  @Output() public upload: EventEmitter<void> = new EventEmitter<void>();

  public constructor(
    public uploadPresenter: UploadPresenter
  ) {

  }
  public fileChangeEvent(fileInput: any) {
    this.fileModel.Value = fileInput.target?.value;
    this.fileModel.File = fileInput.target?.files[0];
    this.fileModel.Name = fileInput.target?.files[0]?.name;
    this.fileModel.Size =  fileInput.target?.files[0]?.size;
    if (!this.allowedExtension.exec(this.fileModel.Value)) {
      this.text = 'El archivo no tiene el formato correcto';
      this.error = true;
          
    } else {
      this.error = false
      this.text = 'El formato del archivo es correcto';
    }
  }

  public cancel() {
    this.fileModel = new FileModel();
  }

  public process() {
    localStorage.setItem('file', this.fileModel.Name)
    this.upload.emit();
  }

  openFileDialog(): void {
    const inputFile = this.fileInput.nativeElement;
    inputFile.click();
  }
}
