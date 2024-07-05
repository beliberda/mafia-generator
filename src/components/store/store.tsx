import { makeAutoObservable, toJS } from "mobx";

class Store {
  isModalShown: boolean = false;
  roleList: string[] = ["Мафия", "Мирный", "Коммисар", "Врач", "Красотка"];
  randomizeRoleList:string[]=[]
  indexRole:number = 0;

  constructor() {
    makeAutoObservable(this, {}, {deep:true});
  }
  get nextCard(){
   if(this.indexRole < this.randomizeRoleList.length) this.indexRole++
    return this.randomizeRoleList[this.indexRole]
  }
  get prevCard(){
    if(this.indexRole > 0) this.indexRole--
    return this.randomizeRoleList[this.indexRole]
  }
  setIsmodalShown() {
    this.isModalShown = !this.isModalShown;
  }
  addRoleList(role: string) {
    this.roleList.push(role);
  }
  deleteRoleList(value: string) {
    this.roleList = this.roleList.filter(role => role !== value);
  }
  editRoleList(value: string, index: number) {
    this.roleList[index] = value;
    
  }
  randomizeRoles() {
    this.randomizeRoleList = [...this.roleList].sort(() => Math.random() - 0.5);
    console.log(toJS(this.randomizeRoleList));
    
  }

}
export default new Store