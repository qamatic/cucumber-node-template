//all fixtures are registered and exposed thru this
import {IFixtures} from "cucumber-x";
import {IMyDietFixture} from "./IDietFixture";

export interface IAppFixtures extends IFixtures {
    getDietFixture(instanceName?: string | null): IMyDietFixture;
}
