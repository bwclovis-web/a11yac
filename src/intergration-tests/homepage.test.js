import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../pages/index';

describe("HomePage", () => {
    it('should render correctly ', () => {
        const tree = renderer.create(<HomePage/>).toJSON()
        expect(tree).toMatchSnapshot()
    });
})