import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe("Layout", () => {
    it('should render correctly ', () => {
        const tree = renderer.create(<Layout/>).toJSON()
        expect(tree).toMatchSnapshot()
    });
})