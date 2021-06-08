export class FileModel{
 
 public set Name( name : string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  private name: string;

  public set Size(size: number) {
    this.size = size;
  }

  public get Size(): number {
    return this.size;
  }

  private size: number;

  public set Value( value : string) {
    this.value = value;
  }

  public get Value(): string {
    return this.value;
  }

  private value: string;

  public set File( file : File) {
    this.file = file;
  }

  public get File(): File {
    return this.file;
  }

  private file: File;
    
    constructor(){
     

    }
}

