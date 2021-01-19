import { capitalizeFirstLetter } from './index'

it("Is a invalid valid Json", () => {
    expect(capitalizeFirstLetter('a')).toEqual('A');
});
