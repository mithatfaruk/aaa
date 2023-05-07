import { createElement } from 'lwc';
import A9WireDecoratorAramaMotoru from 'c/a9WireDecoratorAramaMotoru';

describe('c-a9-wire-decorator-arama-motoru', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-a9-wire-decorator-arama-motoru', {
            is: A9WireDecoratorAramaMotoru
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});