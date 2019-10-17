import {BaseFixture} from "../framework";
import {FixtureConstants} from "./interfaces/FixtureConstants";
import {MyDietFixture} from "./MyDietFixture";
import {IAppFixtures} from "./interfaces/IAppFixtures";


// this is just an another fixture class type but it helps you register other fixtures
export class AppFixtures extends BaseFixture implements IAppFixtures {
    constructor() {
        super();
    }

    setup() {
        this.getContainer().inject(FixtureConstants.MY_DIET_FIXTURE, MyDietFixture);
    }

    getDietFixture(instanceName?: string | null) {
        return this.createFixture(FixtureConstants.MY_DIET_FIXTURE, instanceName);
    }

    createFixture(beanName: string, instanceName?: string | null, ...args: any): any {
        let aFixture = this.getContainer().getBean<BaseFixture>(beanName, instanceName, ...args);
        aFixture.setFixtures(this);
        return aFixture;
    }

}
