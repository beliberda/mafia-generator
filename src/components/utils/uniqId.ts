import { Role } from "@/components/interfaces/interface"
import { random } from "@/components/utils/randomNumber"


function isInArray(array:Role[],id:number):boolean {
    array.forEach(element => {
        if (element.id === id) {
            return true
        }
    });
    return false;
}

function getUnicId(array: Role[]):number {
    let id = random(1,1000)
    if (!isInArray(array,id)) {
        return id
    }
    else {
        return getUnicId(array)
    }
}
export {getUnicId}