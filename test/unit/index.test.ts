import HelloWorld from '../../src/index'

test('HelloWorld instance say helloworld', (): void => {
  const text = 'hello world'
  const helloworld = new HelloWorld(text)

  expect(helloworld.sayHelloWorld()).toBe(text);
})
