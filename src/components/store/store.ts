import { Role } from "@/components/interfaces/interface";
import { makeAutoObservable, toJS } from "mobx";

class Store {
  isModalShown: boolean = false;
  roleList: Role[] = [
    { id: 1, title: "Мафия", img: "./cards/Мафия.webp" },
    { id: 2, title: "Мирный", img: "./cards/Мирный.webp" },
    { id: 3, title: "Коммисар", img: "./cards/Коммисар.webp" },
    { id: 4, title: "Врач", img: "./cards/Врач.webp" },
    { id: 5, title: "Красотка", img: "./cards/Красотка.webp" },
  ];
  randomizeRoleList: Role[] = [];
  indexRole: number = 0;
  currentCard: Role = { title: "", img: "", id: 0 };
  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }
  nextCard() {
    if (this.indexRole < this.randomizeRoleList.length - 1) this.indexRole++;
    this.currentCard = this.randomizeRoleList[this.indexRole];
  }
  prevCard() {
    if (this.indexRole > 0) this.indexRole--;
    this.currentCard = this.randomizeRoleList[this.indexRole];
  }
  setIsmodalShown() {
    this.isModalShown = !this.isModalShown;
  }
  addRoleList(role: Role) {
    this.roleList.push(role);
  }
  deleteRoleList(id: number) {
    this.roleList = this.roleList.filter((role) => role.id !== id);
  }
  editRoleList(value: string, id: number) {
    let image = "./cards/" + value + ".webp";
    this.roleList = this.roleList.map((role) =>
      role.id === id ? { ...role, img: image, title: value } : role
    );
    console.log("value", value, "id", id, toJS(this.roleList));
  }
  randomizeRoles() {
    this.randomizeRoleList = [...this.roleList].sort(() => Math.random() - 0.5);
    console.log(toJS(this.randomizeRoleList));
    this.currentCard = this.randomizeRoleList[this.indexRole];
  }
}
export default new Store();
