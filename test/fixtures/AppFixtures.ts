import {BaseFixture, IAppFixtures} from "../interfaces";

// this is just an another fixture class type but it helps you register other fixtures
export class AppFixtures  extends BaseFixture implements IAppFixtures{
    constructor() {
        super();
    }

    setup() {
        //this.getContainer().inject(Constants.Fixture, aFixture);
    }

    createFixture(beanName: string, instanceName?: string | null, ...args: any): any {
        let aFixture = this.getContainer().getBean<BaseFixture>(beanName, instanceName, ...args);
        aFixture.setFixtures(this);
        return aFixture;
    }

}
