import {Fixture, IFixtures, ITestFacade} from "cucumber-x";

//all fixtures are registered and exposed thru this
export interface IAppFixtures extends IFixtures {

}

//this is global to scenarios
export interface IAppTestFacade extends ITestFacade {
    fixtures(): IAppFixtures;
}

//all your fixtures will extend this class
export class BaseFixture extends Fixture {
    public getFixtures(): IAppFixtures {
        return super.getFixtures() as IAppFixtures;
    }
}


