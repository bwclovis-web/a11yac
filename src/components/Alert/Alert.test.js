import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';

describe("Alert", () => {
    it('should render correctly ', () => {
        const tree = renderer.create(<Alert/>).toJSON()
        expect(tree).toMatchSnapshot()
    });
})