import {IMyDietFixture} from "./interfaces/IDietFixture";
import {BaseFixture} from "../framework";


export class MyDietFixture extends BaseFixture implements IMyDietFixture {

    getDietRecommendations(ageFrom: number, ageTo: number): string {
        if ((ageFrom >= 0) && (ageTo <= 6)) {
            return "apple, nuts"
        }
        return "no diet, eat everything you like";
    }

}
