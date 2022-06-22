export class Tarea {

    private _name : string;;
    private _isDone : boolean;
    private _isEdit : boolean;

    constructor(name : string){
        this._name= name;
        this._isDone = false;
        this._isEdit= false;
    }

  public get name():string{
        return this._name;
    }

    public set name(name:string){
        this._name = name;
    }

    public get isDone():boolean{
        return this._isDone;
    }

    public set isDone(isEdit:boolean){
        this._isDone = isEdit;
    }
    public get isEdit():boolean{
        return this._isEdit;
    }

    public set isEdit(isEdit:boolean){
        this._isEdit = isEdit;
    }

}
