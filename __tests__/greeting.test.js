import Greeting from "../src/greeting";

describe('greet', function () {
    it('should return hello world when call without passing name', function () {
        let greeting = new Greeting();
        let greetingMessage = greeting.greet();
        expect(greetingMessage).toBe("Hello world");

    });
});
