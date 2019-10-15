import {CxConstants, TestFacade} from "cucumber-x";
import {IAppFixtures, IAppTestFacade} from "../interfaces";
import {AppFixtures} from "./AppFixtures";

export class AppTestFacade extends TestFacade implements IAppTestFacade{
    constructor(init: { attach: Function, parameters: { [key: string]: any } }) {
        super(init);
        this.container().inject(CxConstants.FIXTURES, AppFixtures);
    }

    fixtures(): IAppFixtures {
        return super.fixtures() as IAppFixtures;
    }
}
