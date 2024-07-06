import { makeAutoObservable, toJS } from "mobx";
type Role  = {
  title: string;
  img: string;
}
class Store {
  isModalShown: boolean = false;
  roleList: Role[] = [
    {title:"Мафия",
img:"/cards/Мафия.png"}, {title:"Мирный",
img:"/cards/Мирный.png"}, {title:"Коммисар",
img:"/cards/Коммисар.png"}, {title:"Врач",
img:"/cards/Врач.png"}, {title:"Красотка",
img:"/cards/Красотка.png"}
];
  randomizeRoleList:Role[]=[]
  indexRole:number = 0;
  currentCard: Role = {title:"",img:""};
  constructor() {
    makeAutoObservable(this, {}, {deep:true});
  }
  nextCard(){
   if(this.indexRole < this.randomizeRoleList.length-1) this.indexRole++
    this.currentCard= this.randomizeRoleList[this.indexRole]
  }
  prevCard(){
    if(this.indexRole > 0) this.indexRole--
   this.currentCard= this.randomizeRoleList[this.indexRole]
  }
  setIsmodalShown() {
    this.isModalShown = !this.isModalShown;
  }
  addRoleList(role: Role) {
    this.roleList.push(role);
  }
  deleteRoleList(value: string) {
    this.roleList = this.roleList.filter(role => role.title !== value);
  }
  editRoleList(value: string, index: number) {
    let image = "/public/cards/"+value+".png";

    this.roleList[index] = {title: value, img: image};
    
  }
  randomizeRoles() {
    this.randomizeRoleList = [...this.roleList].sort(() => Math.random() - 0.5);
    console.log(toJS(this.randomizeRoleList));
    this.currentCard = this.randomizeRoleList[this.indexRole]
    
  }

}
export default new Store