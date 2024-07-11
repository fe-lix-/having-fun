export default async function decorate(block) {
    const test = document.createElement('div');
    test.textContent = 'Hello, world!';

    block.append(test);
}