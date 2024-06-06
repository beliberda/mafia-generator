import { makeAutoObservable } from "mobx";

export default class Store {
  isModalShown: boolean = false;
  roleList: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setIsmodalShown(isModalShown: boolean) {
    this.isModalShown = isModalShown;
  }
  addRoleList(role: string) {
    this.roleList.push(role);
  }
  deleteRoleList(role: string) {
    this.roleList.splice(this.roleList.indexOf(role), 1);
  }
}
